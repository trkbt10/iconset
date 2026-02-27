///|
/// Valid icon sizes for each format.
let valid_ico_sizes : Array[Int] = [16, 24, 32, 48, 64, 128, 256]

///|
let valid_icns_sizes : Array[Int] = [16, 32, 64, 128, 256, 512, 1024]

///|
/// Parse a JSON string into a Manifest.
pub fn parse(json_str : String) -> @types.Manifest raise @types.IconsetError {
  let json = @json.parse(json_str) catch {
    e => raise @types.InvalidManifest("JSON parse error: \{e}")
  }
  @json.from_json(json) catch {
    e => raise @types.InvalidManifest("Schema error: \{e}")
  }
}

///|
/// Validate a manifest: check that name is non-empty and sizes are valid.
pub fn validate(manifest : @types.Manifest) -> Unit raise @types.IconsetError {
  if manifest.name == "" {
    raise @types.InvalidManifest("Manifest name must not be empty")
  }
  if manifest.outputs.is_empty() {
    raise @types.InvalidManifest("Manifest must have at least one output")
  }
  for output in manifest.outputs {
    if output.sizes.is_empty() {
      raise @types.EmptySizeList
    }
    for size in output.sizes {
      if size <= 0 {
        raise @types.InvalidImageSize(size, 0)
      }
      match output.format {
        @types.Ico =>
          if !valid_ico_sizes.contains(size) {
            raise @types.InvalidImageSize(size, 0)
          }
        @types.Icns =>
          if !valid_icns_sizes.contains(size) {
            raise @types.InvalidImageSize(size, 0)
          }
        @types.Png => () // Any positive size is valid for PNG
      }
    }
  }
}

///|
/// Collect all unique sizes required across all outputs.
pub fn collect_sizes(manifest : @types.Manifest) -> Array[Int] {
  let seen : Map[Int, Unit] = {}
  let sizes : Array[Int] = []
  for output in manifest.outputs {
    for size in output.sizes {
      if !seen.contains(size) {
        seen[size] = ()
        sizes.push(size)
      }
    }
  }
  sizes.sort()
  sizes
}
