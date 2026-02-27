///|
/// WASM bridge for iconset generation.
///
/// Exports functions that can be called from JavaScript/WASM host.
/// The host provides PNG image data for each size, and receives
/// encoded ICO/ICNS/PNG bytes back.
///
/// Session API allows building multi-image containers (ICO/ICNS)
/// by adding images one at a time, then encoding them together.
fn main {
  println("iconset WASM module loaded")
}

// ---------------------------------------------------------------------------
// Single-image encoding
// ---------------------------------------------------------------------------

///|
/// Encode a single PNG image into ICO format.
pub fn encode_ico_single(
  width : Int,
  height : Int,
  png_data : Bytes,
) -> Bytes raise @types.IconsetError {
  @ico.encode([{ width, height, png_data }])
}

///|
/// Encode a single PNG image into ICNS format.
pub fn encode_icns_single(
  width : Int,
  height : Int,
  png_data : Bytes,
) -> Bytes raise @types.IconsetError {
  @icns.encode([{ width, height, png_data }])
}

///|
/// Parse and validate a manifest JSON string.
/// Returns the manifest name on success, or raises an error.
pub fn validate_manifest(json_str : String) -> String raise @types.IconsetError {
  let manifest = @manifest.parse(json_str)
  @manifest.validate(manifest)
  manifest.name
}

// ---------------------------------------------------------------------------
// Session API for multi-image containers
// ---------------------------------------------------------------------------

///|
let sessions : Array[Map[Int, Bytes]] = []

///|
/// Create a new image session. Returns the session ID.
pub fn create_session() -> Int {
  let id = sessions.length()
  sessions.push({})
  id
}

///|
/// Add a PNG image to a session, keyed by pixel size.
pub fn session_add_image(id : Int, size : Int, png_data : Bytes) -> Unit {
  sessions[id][size] = png_data
}

///|
/// Encode images from a session into ICO format.
/// sizes_json: JSON array of pixel sizes, e.g. "[16,32,48]".
pub fn session_encode_ico(
  id : Int,
  sizes_json : String,
) -> Bytes raise @types.IconsetError {
  let images = collect_session_images(id, sizes_json)
  @ico.encode(images)
}

///|
/// Encode images from a session into ICNS format.
/// sizes_json: JSON array of pixel sizes, e.g. "[16,32,128,256,512]".
pub fn session_encode_icns(
  id : Int,
  sizes_json : String,
) -> Bytes raise @types.IconsetError {
  let images = collect_session_images(id, sizes_json)
  @icns.encode(images)
}

///|
/// Destroy a session and free its images.
pub fn destroy_session(id : Int) -> Unit {
  sessions[id] = {}
}

///|
fn collect_session_images(
  id : Int,
  sizes_json : String,
) -> Array[@types.SizedImage] raise @types.IconsetError {
  let sizes = parse_int_array(sizes_json)
  let images : Array[@types.SizedImage] = []
  let session = sessions[id]
  for size in sizes {
    match session.get(size) {
      Some(png_data) => images.push({ width: size, height: size, png_data })
      None => raise @types.IconsetError::InvalidImageSize(size, size)
    }
  }
  images
}

///|
fn parse_int_array(json_str : String) -> Array[Int] raise @types.IconsetError {
  let json = @json.parse(json_str) catch {
    _ =>
      raise @types.IconsetError::InvalidManifest(
        "Invalid JSON array: \{json_str}",
      )
  }
  guard json is Array(arr) else {
    raise @types.IconsetError::InvalidManifest(
      "Expected JSON array, got: \{json_str}",
    )
  }
  let result : Array[Int] = []
  for item in arr {
    guard item is Number(n, ..) else {
      raise @types.IconsetError::InvalidManifest(
        "Expected number in array, got: \{item}",
      )
    }
    result.push(n.to_int())
  }
  result
}

// ---------------------------------------------------------------------------
// Catalog query functions
// ---------------------------------------------------------------------------

///|
/// Get all supported platform names as a JSON array.
pub fn get_all_platforms() -> String {
  @catalog.all_platforms().to_json().stringify()
}

///|
/// Get required pixel sizes for given platforms.
/// platforms_json: JSON array of platform names, e.g. '["Windows","MacOS"]'.
pub fn get_required_sizes(
  platforms_json : String,
) -> String raise @types.IconsetError {
  let platforms = parse_platforms(platforms_json)
  let sizes = @catalog.required_sizes_for(platforms)
  sizes.to_json().stringify()
}

///|
/// Get the full catalog specification for a single platform as JSON.
pub fn get_catalog_json(platform : String) -> String raise @types.IconsetError {
  let p = parse_single_platform(platform)
  let catalog = @catalog.catalog_for(p)
  catalog.to_json().stringify()
}

///|
fn parse_platforms(
  json_str : String,
) -> Array[@catalog.Platform] raise @types.IconsetError {
  let json = @json.parse(json_str) catch {
    _ => raise @types.IconsetError::InvalidManifest("Invalid JSON: \{json_str}")
  }
  guard json is Array(arr) else {
    raise @types.IconsetError::InvalidManifest(
      "Expected JSON array, got: \{json_str}",
    )
  }
  let platforms : Array[@catalog.Platform] = []
  for item in arr {
    guard item is String(s) else {
      raise @types.IconsetError::InvalidManifest(
        "Expected string in platform array, got: \{item}",
      )
    }
    platforms.push(parse_single_platform(s))
  }
  platforms
}

///|
fn parse_single_platform(
  name : String,
) -> @catalog.Platform raise @types.IconsetError {
  match name {
    "Windows" => @catalog.Platform::Windows
    "MacOS" | "macOS" => @catalog.Platform::MacOS
    "IOS" | "iOS" => @catalog.Platform::IOS
    "Android" => @catalog.Platform::Android
    "Ubuntu" | "Linux" => @catalog.Platform::Ubuntu
    "Web" => @catalog.Platform::Web
    "PWA" => @catalog.Platform::PWA
    _ => raise @types.IconsetError::InvalidManifest("Unknown platform: \{name}")
  }
}

// ---------------------------------------------------------------------------
// Supporting file generators
// ---------------------------------------------------------------------------

///|
/// Generate a PWA web manifest JSON string.
pub fn wasm_generate_webmanifest(name : String, icon_dir : String) -> String {
  @catalog.generate_webmanifest(name, icon_dir)
}

///|
/// Generate Android adaptive icon XML.
pub fn wasm_generate_adaptive_xml(
  bg_is_color : Bool,
  has_monochrome : Bool,
) -> String {
  @catalog.generate_adaptive_xml(bg_is_color, has_monochrome)
}

///|
/// Generate Android background color XML.
pub fn wasm_generate_bg_color_xml(color : String) -> String {
  @catalog.generate_background_color_xml(color)
}
