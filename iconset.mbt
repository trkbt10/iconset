///|
/// Generate icon set outputs from a manifest and pre-sized PNG images.
///
/// `images` is a Map from size (Int) to PNG-encoded Bytes.
/// Returns an array of generated outputs (format + filename + encoded data).
///
/// For PNG outputs, each size becomes a separate file.
/// For ICO/ICNS outputs, all sizes are packed into a single container file.
pub fn generate(
  manifest : @types.Manifest,
  images : Map[Int, Bytes],
) -> Array[@types.GeneratedOutput] raise @types.IconsetError {
  @manifest.validate(manifest)
  let results : Array[@types.GeneratedOutput] = []
  for output in manifest.outputs {
    match output.format {
      @types.Png =>
        for size in output.sizes {
          let png_data = lookup_image(images, size)
          results.push({
            format: @types.Png,
            filename: "\{manifest.name}_\{size}x\{size}.png",
            data: png_data,
          })
        }
      @types.Ico => {
        let sized_images = collect_sized_images(images, output.sizes)
        results.push({
          format: @types.Ico,
          filename: "\{manifest.name}.ico",
          data: @ico.encode(sized_images),
        })
      }
      @types.Icns => {
        let sized_images = collect_sized_images(images, output.sizes)
        results.push({
          format: @types.Icns,
          filename: "\{manifest.name}.icns",
          data: @icns.encode(sized_images),
        })
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
fn collect_sized_images(
  images : Map[Int, Bytes],
  sizes : Array[Int],
) -> Array[@types.SizedImage] raise @types.IconsetError {
  let result : Array[@types.SizedImage] = []
  for size in sizes {
    let png_data = lookup_image(images, size)
    result.push({ width: size, height: size, png_data })
  }
  result
}
