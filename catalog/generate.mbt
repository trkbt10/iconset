///|
/// Generate all icon outputs for selected platforms.
///
/// `name` is used for naming containers (e.g. "MyApp" -> "MyApp.ico").
/// `platforms` selects which platform catalogs to generate.
/// `images` maps pixel size -> PNG-encoded bytes.
///
/// Returns CatalogOutput entries with platform, directory, filename, and data.
pub fn generate_catalog(
  name : String,
  platforms : Array[Platform],
  images : Map[Int, Bytes],
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
      let filename = if name != "" {
        name + "." + format_extension(container.format)
      } else {
        container.filename
      }
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
/// Replace generic names like "app" with the actual app name.
fn apply_name(filename : String, name : String) -> String {
  if name == "" {
    return filename
  }
  // Replace "app." prefix with name for ubuntu/generic icons
  if filename == "app.png" {
    return name + ".png"
  }
  filename
}
