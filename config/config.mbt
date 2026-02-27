///|
/// Configuration for iconset generation.
///
/// Parsed from a JSON config file (e.g., `iconset.json`).
pub(all) struct IconsetConfig {
  name : String
  source : String
  output : String
  platforms : Array[String]
  resize_method : String?
  android : AndroidConfig?
} derive(Show, ToJson, FromJson)

///|
/// Android-specific configuration for adaptive icons.
pub(all) struct AndroidConfig {
  adaptive : Bool
  foreground : String
  background_color : String?
  background_image : String?
  monochrome : String?
} derive(Show, ToJson, FromJson)

///|
/// Resize interpolation method.
pub(all) enum ResizeMethod {
  Nearest
  Bilinear
  Bicubic
} derive(Eq, Show)

///|
/// Parse a JSON string into an IconsetConfig.
pub fn parse_config(
  json_str : String,
) -> IconsetConfig raise @types.IconsetError {
  let json = @json.parse(json_str) catch {
    err => raise @types.InvalidManifest("JSON parse error: \{err}")
  }
  @json.from_json(json) catch {
    err => raise @types.InvalidManifest("Config structure error: \{err}")
  }
}

///|
/// Resolve platform name strings to Platform enum values.
pub fn resolve_platforms(
  names : Array[String],
) -> Array[@catalog.Platform] raise @types.IconsetError {
  let platforms : Array[@catalog.Platform] = []
  for name in names {
    let platform = match name {
      "Windows" => @catalog.Windows
      "MacOS" | "macOS" => @catalog.MacOS
      "IOS" | "iOS" => @catalog.IOS
      "Android" => @catalog.Android
      "Ubuntu" | "Linux" => @catalog.Ubuntu
      "Web" => @catalog.Web
      "PWA" => @catalog.PWA
      _ => raise @types.InvalidManifest("Unknown platform: \{name}")
    }
    platforms.push(platform)
  }
  platforms
}

///|
/// Resolve resize method string to enum.
pub fn resolve_resize_method(name : String?) -> ResizeMethod {
  match name {
    Some("nearest") => Nearest
    Some("bicubic") => Bicubic
    _ => Bilinear
  }
}
