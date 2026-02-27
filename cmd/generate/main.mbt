///|
/// Config-driven icon generation CLI.
///
/// Reads an iconset.json config file, decodes the source PNG(s),
/// resizes to all needed sizes using mizchi/image, then generates
/// all platform outputs via generate_catalog.
///
/// Usage: moon run --target native cmd/generate
fn main {
  let config_path = "iconset.json"
  println("=== iconset: Config-Driven Generation ===")
  println("Config: \{config_path}")
  println("")
  // 1. Read and parse config
  let config_str = @fs.read_file_to_string(config_path) catch {
    err => {
      println("ERROR: Could not read config file \{config_path}: \{err}")
      return
    }
  }
  let config = @config.parse_config(config_str) catch {
    err => {
      println("ERROR: Invalid config: \{err}")
      return
    }
  }
  let platforms = @config.resolve_platforms(config.platforms) catch {
    err => {
      println("ERROR: Invalid platform: \{err}")
      return
    }
  }
  let resize_method = @config.resolve_resize_method(config.resize_method)
  println("Name: \{config.name}")
  println("Source: \{config.source}")
  println("Output: \{config.output}")
  println("Platforms: \{platforms}")
  println("Resize: \{resize_method}")
  println("")
  // 2. Read source PNG
  let source_bytes = @fs.read_file_to_bytes(config.source) catch {
    err => {
      println("ERROR: Could not read source PNG: \{err}")
      return
    }
  }
  let source_image = @image.decode_png(source_bytes) catch {
    err => {
      println("ERROR: Could not decode source PNG: \{err}")
      return
    }
  }
  println(
    "Source: \{source_image.width}x\{source_image.height} decoded (\{source_bytes.length()} bytes)",
  )
  // 3. Compute all required sizes
  let needed_sizes = @catalog.required_sizes_for(platforms)
  println("Required sizes: \{needed_sizes}")
  // 4. Resize source to each size
  let img_resize_method = to_image_resize_method(resize_method)
  let images : Map[Int, Bytes] = {}
  for size in needed_sizes {
    let resized = @image.resize(source_image, size, size, img_resize_method) catch {
      err => {
        println("WARN: resize to \{size}: \{err}")
        continue
      }
    }
    let png_bytes = @image.encode_png(resized) catch {
      err => {
        println("WARN: encode PNG at \{size}: \{err}")
        continue
      }
    }
    images[size] = png_bytes
    println("  Resized: \{size}x\{size} -> \{png_bytes.length()} bytes")
  }
  println("Resized \{images.length()} sizes")
  // 5. Handle Android adaptive icons
  let android_options = prepare_android_options(config, img_resize_method)
  if android_options is Some(_) {
    println("Android adaptive icons: enabled")
  }
  println("")
  // 6. Generate catalog outputs
  let outputs = @catalog.generate_catalog(
    config.name,
    platforms,
    images,
    android_options~,
  ) catch {
    err => {
      println("ERROR: generate_catalog: \{err}")
      return
    }
  }
  println("Generated \{outputs.length()} outputs")
  // 7. Write all outputs to disk
  ensure_dir(config.output)
  for output in outputs {
    let dir = if output.directory != "" {
      config.output + "/" + output.platform.to_string() + "/" + output.directory
    } else {
      config.output + "/" + output.platform.to_string()
    }
    ensure_dir(dir)
    let path = dir + "/" + output.filename
    @fs.write_bytes_to_file(path, output.data) catch {
      err => {
        println("  ERROR writing \{path}: \{err}")
        continue
      }
    }
  }
  // Summary per platform
  let platform_counts : Map[String, Int] = {}
  for output in outputs {
    let key = output.platform.to_string()
    let cur = platform_counts.get(key).unwrap_or(0)
    platform_counts[key] = cur + 1
  }
  for platform in platforms {
    let key = platform.to_string()
    let count = platform_counts.get(key).unwrap_or(0)
    println("  [\{key}] \{count} files")
  }
  println("")
  println("Done! Files written to \{config.output}/")
}

///|
fn to_image_resize_method(rm : @config.ResizeMethod) -> @image.ResizeMethod {
  match rm {
    @config.Nearest => @image.Nearest
    @config.Bilinear => @image.Bilinear
    @config.Bicubic => @image.Bicubic
  }
}

///|
fn prepare_android_options(
  config : @config.IconsetConfig,
  resize_method : @image.ResizeMethod,
) -> @catalog.AndroidOptions? {
  guard config.android is Some(android_config) else { return None }
  guard android_config.adaptive else { return None }
  let adaptive_sizes = @catalog.adaptive_icon_sizes
  // Read and resize foreground
  let fg_bytes = @fs.read_file_to_bytes(android_config.foreground) catch {
    err => {
      println(
        "WARN: Could not read foreground \{android_config.foreground}: \{err}",
      )
      return None
    }
  }
  let fg_image = @image.decode_png(fg_bytes) catch {
    err => {
      println("WARN: Could not decode foreground: \{err}")
      return None
    }
  }
  let foreground : Map[Int, Bytes] = {}
  for size in adaptive_sizes {
    let resized = @image.resize(fg_image, size, size, resize_method) catch {
      _ => continue
    }
    let png = @image.encode_png(resized) catch { _ => continue }
    foreground[size] = png
    println("  Foreground: \{size}x\{size} -> \{png.length()} bytes")
  }
  // Background: color or image
  let background = if android_config.background_color is Some(color) {
    @catalog.Color(color)
  } else if android_config.background_image is Some(bg_path) {
    let bg_bytes = @fs.read_file_to_bytes(bg_path) catch {
      err => {
        println("WARN: Could not read background \{bg_path}: \{err}")
        return None
      }
    }
    let bg_image = @image.decode_png(bg_bytes) catch {
      err => {
        println("WARN: Could not decode background: \{err}")
        return None
      }
    }
    let bg_map : Map[Int, Bytes] = {}
    for size in adaptive_sizes {
      let resized = @image.resize(bg_image, size, size, resize_method) catch {
        _ => continue
      }
      let png = @image.encode_png(resized) catch { _ => continue }
      bg_map[size] = png
    }
    @catalog.Image(bg_map)
  } else {
    @catalog.Color("#FFFFFF")
  }
  // Monochrome (optional)
  let monochrome = prepare_monochrome(
    android_config.monochrome,
    adaptive_sizes,
    resize_method,
  )
  Some({ foreground, background, monochrome })
}

///|
fn prepare_monochrome(
  mono_path : String?,
  sizes : Array[Int],
  resize_method : @image.ResizeMethod,
) -> Map[Int, Bytes]? {
  guard mono_path is Some(path) else { return None }
  let mono_bytes = @fs.read_file_to_bytes(path) catch { _ => return None }
  let mono_image = @image.decode_png(mono_bytes) catch { _ => return None }
  let mono_map : Map[Int, Bytes] = {}
  for size in sizes {
    let resized = @image.resize(mono_image, size, size, resize_method) catch {
      _ => continue
    }
    let png = @image.encode_png(resized) catch { _ => continue }
    mono_map[size] = png
  }
  Some(mono_map)
}

///|
fn ensure_dir(path : String) -> Unit {
  let parts = split_path(path)
  let mut current = ""
  for part in parts {
    if current == "" {
      current = part
    } else {
      current = current + "/" + part
    }
    if not(@fs.path_exists(current)) {
      @fs.create_dir(current) catch {
        _ => ()
      }
    }
  }
}

///|
fn split_path(path : String) -> Array[String] {
  let parts : Array[String] = []
  let buf = StringBuilder::new()
  for c in path {
    if c == '/' {
      if buf.to_string().length() > 0 {
        parts.push(buf.to_string())
        buf.reset()
      }
    } else {
      buf.write_char(c)
    }
  }
  if buf.to_string().length() > 0 {
    parts.push(buf.to_string())
  }
  parts
}
