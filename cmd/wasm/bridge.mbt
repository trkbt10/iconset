///|
/// WASM bridge for iconset generation.
///
/// Exports functions that can be called from JavaScript/WASM host.
/// The host provides PNG image data for each size, and receives
/// encoded ICO/ICNS/PNG bytes back.
///
/// Example JS usage:
/// ```js
/// const wasm = await load("iconset.wasm");
/// const icoBytes = wasm.encode_ico([{size: 16, png: ...}, ...]);
/// ```
fn main {
  println("iconset WASM module loaded")
}

///|
/// Encode a single PNG image into ICO format (for WASM export).
pub fn encode_ico_single(
  width : Int,
  height : Int,
  png_data : Bytes,
) -> Bytes raise @types.IconsetError {
  @ico.encode([{ width, height, png_data }])
}

///|
/// Encode a single PNG image into ICNS format (for WASM export).
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
