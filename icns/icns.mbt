///|
/// ICNS type code: 4-byte OSType identifier for an icon entry.
pub(all) struct IcnsType {
  code : Bytes
  pixel_size : Int
  description : String
} derive(Show)

///|
/// Standard ICNS type codes (non-Retina).
///   icp4=16, icp5=32, icp6=64, ic07=128, ic08=256, ic09=512, ic10=1024
let standard_types : Array[IcnsType] = [
  { code: b"\x69\x63\x70\x34", pixel_size: 16, description: "16x16" },
  { code: b"\x69\x63\x70\x35", pixel_size: 32, description: "32x32" },
  { code: b"\x69\x63\x70\x36", pixel_size: 64, description: "64x64" },
  { code: b"\x69\x63\x30\x37", pixel_size: 128, description: "128x128" },
  { code: b"\x69\x63\x30\x38", pixel_size: 256, description: "256x256" },
  { code: b"\x69\x63\x30\x39", pixel_size: 512, description: "512x512" },
  {
    code: b"\x69\x63\x31\x30",
    pixel_size: 1024,
    description: "1024x1024 (512@2x)",
  },
]

///|
/// Retina ICNS type codes.
///   ic11=32 (16@2x), ic12=64 (32@2x), ic13=256 (128@2x), ic14=512 (256@2x)
let retina_types : Array[IcnsType] = [
  { code: b"\x69\x63\x31\x31", pixel_size: 32, description: "16@2x" },
  { code: b"\x69\x63\x31\x32", pixel_size: 64, description: "32@2x" },
  { code: b"\x69\x63\x31\x33", pixel_size: 256, description: "128@2x" },
  { code: b"\x69\x63\x31\x34", pixel_size: 512, description: "256@2x" },
]

///|
fn type_code_for_size(size : Int) -> Bytes raise @types.IconsetError {
  for t in standard_types {
    if t.pixel_size == size {
      return t.code
    }
  }
  raise @types.InvalidImageSize(size, size)
}

///|
/// Encode multiple PNG images into an ICNS container using standard type codes.
///
/// ICNS format:
///   Magic: 'icns' (4 bytes)
///   Total file size (4 bytes, big-endian)
///   Entries: type_code (4 bytes) + entry_size (4 bytes, big-endian) + PNG data
pub fn encode(
  images : Array[@types.SizedImage],
) -> Bytes raise @types.IconsetError {
  if images.is_empty() {
    raise @types.EmptySizeList
  }
  let entries : Array[(Bytes, Bytes)] = []
  for img in images {
    let tc = type_code_for_size(img.width)
    entries.push((tc, img.png_data))
  }
  encode_entries(entries)
}

///|
/// Encode an ICNS container with full macOS support (standard + Retina types).
///
/// For sizes that have both standard and Retina type codes, both entries
/// are included. This produces the most compatible ICNS file.
pub fn encode_full(
  images : Array[@types.SizedImage],
) -> Bytes raise @types.IconsetError {
  if images.is_empty() {
    raise @types.EmptySizeList
  }
  let image_map : Map[Int, Bytes] = {}
  for img in images {
    image_map[img.width] = img.png_data
  }
  let entries : Array[(Bytes, Bytes)] = []
  // Add standard type entries
  for t in standard_types {
    match image_map.get(t.pixel_size) {
      Some(data) => entries.push((t.code, data))
      None => ()
    }
  }
  // Add retina type entries (same pixel data, different type code)
  for t in retina_types {
    match image_map.get(t.pixel_size) {
      Some(data) => entries.push((t.code, data))
      None => ()
    }
  }
  if entries.is_empty() {
    raise @types.EmptySizeList
  }
  encode_entries(entries)
}

///|
fn encode_entries(entries : Array[(Bytes, Bytes)]) -> Bytes {
  let mut total_size = 8
  for entry in entries {
    total_size = total_size + 8 + entry.1.length()
  }
  let buf = @buffer.new(size_hint=total_size)
  // ICNS magic header
  buf.write_byte(b'\x69') // 'i'
  buf.write_byte(b'\x63') // 'c'
  buf.write_byte(b'\x6E') // 'n'
  buf.write_byte(b'\x73') // 's'
  buf.write_uint_be(total_size.reinterpret_as_uint())
  for entry in entries {
    let entry_size = 8 + entry.1.length()
    buf.write_bytes(entry.0) // type code
    buf.write_uint_be(entry_size.reinterpret_as_uint())
    buf.write_bytes(entry.1) // PNG data
  }
  buf.to_bytes()
}
