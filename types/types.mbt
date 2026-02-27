///|
/// Error type for iconset operations.
pub(all) suberror IconsetError {
  InvalidManifest(String)
  InvalidImageSize(Int, Int)
  EmptySizeList
  UnsupportedFormat(String)
  EncodingError(String)
} derive(Show)

///|
/// Supported output icon formats.
pub(all) enum OutputFormat {
  Png
  Ico
  Icns
} derive(Eq, Show, Hash)

///|
pub impl ToJson for OutputFormat with to_json(self) {
  match self {
    Png => Json::string("png")
    Ico => Json::string("ico")
    Icns => Json::string("icns")
  }
}

///|
pub impl @json.FromJson for OutputFormat with from_json(json, path) {
  guard json is String(s) else {
    raise @json.JsonDecodeError(
      (path, "OutputFormat: expected string, got \{json}"),
    )
  }
  match s {
    "png" => Png
    "ico" => Ico
    "icns" => Icns
    _ => raise @json.JsonDecodeError((path, "Unknown output format: \{s}"))
  }
}

///|
/// A single output specification: format + list of sizes to generate.
pub(all) struct OutputSpec {
  format : OutputFormat
  sizes : Array[Int]
} derive(Eq, Show, ToJson, FromJson)

///|
/// The manifest driving iconset generation.
pub(all) struct Manifest {
  name : String
  outputs : Array[OutputSpec]
} derive(Eq, Show, ToJson, FromJson)

///|
/// A PNG-encoded image at a specific pixel size.
pub(all) struct SizedImage {
  width : Int
  height : Int
  png_data : Bytes
} derive(Show)

///|
/// A generated output: format + encoded bytes.
pub(all) struct GeneratedOutput {
  format : OutputFormat
  filename : String
  data : Bytes
} derive(Show)
