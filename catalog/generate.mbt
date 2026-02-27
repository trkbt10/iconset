///|
/// Generate all icon outputs for selected platforms.
///
/// `name` is used for naming containers and icons.
/// `platforms` selects which platform catalogs to generate.
/// `images` maps pixel size -> PNG-encoded bytes.
/// `android_options` provides adaptive icon layers (foreground/background/monochrome).
///
/// Returns CatalogOutput entries with platform, directory, filename, and data.
pub fn generate_catalog(
  name : String,
  platforms : Array[Platform],
  images : Map[Int, Bytes],
  android_options? : AndroidOptions? = None,
) -> Array[CatalogOutput] raise @types.IconsetError {
  let results : Array[CatalogOutput] = []
  for platform in platforms {
    let catalog = catalog_for(platform)
    // Generate container files (ICO/ICNS)
    for container in catalog.containers {
      let sized_images : Array[@types.SizedImage] = []
      for size in container.sizes {
        let png_data = lookup_image(images, size)
        sized_images.push({ width: size, height: size, png_data })
      }
      let data = match container.format {
        @types.Ico => @ico.encode(sized_images)
        @types.Icns => @icns.encode_full(sized_images)
        _ => raise @types.EncodingError("Unsupported container format")
      }
      let filename = apply_container_name(
        container.filename,
        name,
        container.format,
      )
      results.push({ platform, directory: container.directory, filename, data })
    }
    // Generate individual PNG files
    for icon in catalog.icons {
      let png_data = lookup_image(images, icon.pixel_size)
      results.push({
        platform,
        directory: icon.directory,
        filename: apply_name(icon.filename, name),
        data: png_data,
      })
    }
    // PWA: generate site.webmanifest
    if platform is PWA {
      let manifest_json = generate_webmanifest(name, "icons")
      results.push({
        platform,
        directory: "",
        filename: "site.webmanifest",
        data: string_to_bytes(manifest_json),
      })
    }
    // Android: generate adaptive icon assets
    if platform is Android {
      if android_options is Some(opts) {
        generate_android_adaptive(results, images, opts)
      }
    }
  }
  results
}

///|
fn lookup_image(
  images : Map[Int, Bytes],
  size : Int,
) -> Bytes raise @types.IconsetError {
  match images.get(size) {
    Some(data) => data
    None => raise @types.InvalidImageSize(size, 0)
  }
}

///|
fn format_extension(format : @types.OutputFormat) -> String {
  match format {
    @types.Ico => "ico"
    @types.Icns => "icns"
    @types.Png => "png"
  }
}

///|
/// Apply app name to container filenames.
/// Only replaces containers with generic "app." prefix.
fn apply_container_name(
  filename : String,
  name : String,
  format : @types.OutputFormat,
) -> String {
  if name == "" {
    return filename
  }
  // Only replace generic "app.*" containers
  if filename.has_prefix("app.") {
    return name + "." + format_extension(format)
  }
  filename
}

///|
/// Replace generic names like "app" with the actual app name.
fn apply_name(filename : String, name : String) -> String {
  if name == "" {
    return filename
  }
  if filename == "app.png" {
    return name + ".png"
  }
  filename
}

///|
/// Convert a string to UTF-8 encoded bytes.
fn string_to_bytes(s : String) -> Bytes {
  let result : Array[Byte] = []
  for c in s {
    let code = c.to_int()
    if code < 0x80 {
      result.push(code.to_byte())
    } else if code < 0x800 {
      result.push((0xC0 | (code >> 6)).to_byte())
      result.push((0x80 | (code & 0x3F)).to_byte())
    } else if code < 0x10000 {
      result.push((0xE0 | (code >> 12)).to_byte())
      result.push((0x80 | ((code >> 6) & 0x3F)).to_byte())
      result.push((0x80 | (code & 0x3F)).to_byte())
    } else {
      result.push((0xF0 | (code >> 18)).to_byte())
      result.push((0x80 | ((code >> 12) & 0x3F)).to_byte())
      result.push((0x80 | ((code >> 6) & 0x3F)).to_byte())
      result.push((0x80 | (code & 0x3F)).to_byte())
    }
  }
  Bytes::from_array(result[:])
}

///|
/// Generate Android adaptive icon outputs.
fn generate_android_adaptive(
  results : Array[CatalogOutput],
  images : Map[Int, Bytes],
  opts : AndroidOptions,
) -> Unit {
  // Foreground layers
  for density in android_densities {
    if opts.foreground.get(density.adaptive_size) is Some(fg_data) {
      results.push({
        platform: Android,
        directory: density.dir,
        filename: "ic_launcher_foreground.png",
        data: fg_data,
      })
    }
  }
  // Background layers
  match opts.background {
    Color(color) => {
      let bg_xml = generate_background_color_xml(color)
      results.push({
        platform: Android,
        directory: "values",
        filename: "ic_launcher_background.xml",
        data: string_to_bytes(bg_xml),
      })
    }
    Image(bg_images) =>
      for density in android_densities {
        if bg_images.get(density.adaptive_size) is Some(bg_data) {
          results.push({
            platform: Android,
            directory: density.dir,
            filename: "ic_launcher_background.png",
            data: bg_data,
          })
        }
      }
  }
  // Monochrome layers (optional)
  if opts.monochrome is Some(mono_images) {
    for density in android_densities {
      if mono_images.get(density.adaptive_size) is Some(mono_data) {
        results.push({
          platform: Android,
          directory: density.dir,
          filename: "ic_launcher_monochrome.png",
          data: mono_data,
        })
      }
    }
  }
  // Round legacy fallback (same data as ic_launcher.png)
  for density in android_densities {
    if images.get(density.legacy_size) is Some(data) {
      results.push({
        platform: Android,
        directory: density.dir,
        filename: "ic_launcher_round.png",
        data,
      })
    }
  }
  // Adaptive icon XML files
  let has_monochrome = opts.monochrome is Some(_)
  let bg_is_color = opts.background is Color(_)
  let xml = generate_adaptive_xml(bg_is_color, has_monochrome)
  results.push({
    platform: Android,
    directory: "mipmap-anydpi-v26",
    filename: "ic_launcher.xml",
    data: string_to_bytes(xml),
  })
  results.push({
    platform: Android,
    directory: "mipmap-anydpi-v26",
    filename: "ic_launcher_round.xml",
    data: string_to_bytes(xml),
  })
}
