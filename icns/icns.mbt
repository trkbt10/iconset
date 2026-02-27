///|
/// ICNS type code: 4-byte OSType identifier for an icon entry.
pub(all) struct IcnsType {
  code : Bytes
  pixel_size : Int
  description : String
} derive(Show)

///|
/// ICNS entry: type code + image data.
pub(all) struct IcnsEntry {
  type_code : Bytes
  data : Bytes
} derive(Show)

///|
/// ICNS context: the intermediate representation between parse and build.
/// Inspect, modify entries, then call `build()` to serialize.
pub(all) struct IcnsContext {
  entries : Array[IcnsEntry]
} derive(Show)

///|
/// Standard ICNS type codes (non-Retina).
///   icp4=16, icp5=32, icp6=64, ic07=128, ic08=256, ic09=512, ic10=1024
pub let standard_types : Array[IcnsType] = [
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
pub let retina_types : Array[IcnsType] = [
  { code: b"\x69\x63\x31\x31", pixel_size: 32, description: "16@2x" },
  { code: b"\x69\x63\x31\x32", pixel_size: 64, description: "32@2x" },
  { code: b"\x69\x63\x31\x33", pixel_size: 256, description: "128@2x" },
  { code: b"\x69\x63\x31\x34", pixel_size: 512, description: "256@2x" },
]

///|
/// ICNS magic bytes: 'icns'
let icns_magic : Bytes = b"\x69\x63\x6E\x73"

// ---------------------------------------------------------------------------
// Parse
// ---------------------------------------------------------------------------

///|
/// Parse ICNS binary data into an IcnsContext.
///
/// ICNS layout:
///   Magic: 'icns' (4 bytes)
///   File size (4 bytes, big-endian)
///   Entries: type_code(4) + entry_size(4, big-endian) + data
pub fn parse(data : Bytes) -> IcnsContext raise @types.IconsetError {
  if data.length() < 8 {
    raise @types.EncodingError("ICNS data too short for header")
  }
  // Verify magic
  for i in 0..<4 {
    if data[i] != icns_magic[i] {
      raise @types.EncodingError("ICNS magic mismatch")
    }
  }
  let file_size = read_u32_be(data, 4)
  if file_size > data.length() {
    raise @types.EncodingError(
      "ICNS file_size (\{file_size}) exceeds data length (\{data.length()})",
    )
  }
  let entries : Array[IcnsEntry] = []
  let mut offset = 8
  while offset + 8 <= file_size {
    let type_code = Bytes::from_iter(data[offset:offset + 4].iter())
    let entry_size = read_u32_be(data, offset + 4)
    if entry_size < 8 {
      raise @types.EncodingError("ICNS entry size too small: \{entry_size}")
    }
    let data_size = entry_size - 8
    if offset + entry_size > file_size {
      raise @types.EncodingError("ICNS entry data out of bounds")
    }
    let blob = Bytes::from_iter(data[offset + 8:offset + 8 + data_size].iter())
    entries.push({ type_code, data: blob })
    offset = offset + entry_size
  }
  { entries, }
}

// ---------------------------------------------------------------------------
// Context manipulation
// ---------------------------------------------------------------------------

///|
/// Create a new empty IcnsContext.
pub fn IcnsContext::new() -> IcnsContext {
  { entries: [] }
}

///|
/// Add an entry with explicit type code and data.
pub fn IcnsContext::add(
  self : IcnsContext,
  type_code : Bytes,
  data : Bytes,
) -> Unit {
  self.entries.push({ type_code, data })
}

///|
/// Add a PNG entry using the standard type code for the given pixel size.
pub fn IcnsContext::add_png(
  self : IcnsContext,
  pixel_size : Int,
  png_data : Bytes,
) -> Unit raise @types.IconsetError {
  let tc = type_code_for_size(pixel_size)
  self.entries.push({ type_code: tc, data: png_data })
}

///|
/// Add a PNG entry with both standard and Retina type codes
/// (if a Retina code exists for that size).
pub fn IcnsContext::add_png_full(
  self : IcnsContext,
  pixel_size : Int,
  png_data : Bytes,
) -> Unit {
  // Standard type
  for t in standard_types {
    if t.pixel_size == pixel_size {
      self.entries.push({ type_code: t.code, data: png_data })
    }
  }
  // Retina type
  for t in retina_types {
    if t.pixel_size == pixel_size {
      self.entries.push({ type_code: t.code, data: png_data })
    }
  }
}

///|
/// Remove all entries matching a given type code.
pub fn IcnsContext::remove_type(self : IcnsContext, type_code : Bytes) -> Unit {
  let kept : Array[IcnsEntry] = []
  for entry in self.entries {
    if entry.type_code != type_code {
      kept.push(entry)
    }
  }
  self.entries.clear()
  for entry in kept {
    self.entries.push(entry)
  }
}

///|
/// Find the first entry matching a type code.
pub fn IcnsContext::find(self : IcnsContext, type_code : Bytes) -> IcnsEntry? {
  for entry in self.entries {
    if entry.type_code == type_code {
      return Some(entry)
    }
  }
  None
}

///|
/// List all type codes present in the context.
pub fn IcnsContext::type_codes(self : IcnsContext) -> Array[Bytes] {
  let result : Array[Bytes] = []
  for entry in self.entries {
    result.push(entry.type_code)
  }
  result
}

///|
/// Resolve a type code to its IcnsType metadata (size, description).
pub fn resolve_type(type_code : Bytes) -> IcnsType? {
  for t in standard_types {
    if t.code == type_code {
      return Some(t)
    }
  }
  for t in retina_types {
    if t.code == type_code {
      return Some(t)
    }
  }
  None
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

///|
/// Build ICNS binary from an IcnsContext.
pub fn build(ctx : IcnsContext) -> Bytes raise @types.IconsetError {
  if ctx.entries.is_empty() {
    raise @types.EmptySizeList
  }
  let mut total_size = 8
  for entry in ctx.entries {
    total_size = total_size + 8 + entry.data.length()
  }
  let buf = @buffer.new(size_hint=total_size)
  buf.write_bytes(icns_magic)
  buf.write_uint_be(total_size.reinterpret_as_uint())
  for entry in ctx.entries {
    let entry_size = 8 + entry.data.length()
    buf.write_bytes(entry.type_code)
    buf.write_uint_be(entry_size.reinterpret_as_uint())
    buf.write_bytes(entry.data)
  }
  buf.to_bytes()
}

// ---------------------------------------------------------------------------
// Convenience (backward-compatible)
// ---------------------------------------------------------------------------

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
/// Convenience wrapper over the parse->context->build pipeline.
pub fn encode(
  images : Array[@types.SizedImage],
) -> Bytes raise @types.IconsetError {
  let ctx = IcnsContext::new()
  for img in images {
    ctx.add_png(img.width, img.png_data)
  }
  build(ctx)
}

///|
/// Encode an ICNS container with full macOS support (standard + Retina types).
/// Convenience wrapper that includes both standard and Retina entries.
pub fn encode_full(
  images : Array[@types.SizedImage],
) -> Bytes raise @types.IconsetError {
  if images.is_empty() {
    raise @types.EmptySizeList
  }
  let ctx = IcnsContext::new()
  for img in images {
    ctx.add_png_full(img.width, img.png_data)
  }
  if ctx.entries.is_empty() {
    raise @types.EmptySizeList
  }
  build(ctx)
}

// ---------------------------------------------------------------------------
// Binary helpers
// ---------------------------------------------------------------------------

///|
fn read_u32_be(data : Bytes, offset : Int) -> Int {
  (data[offset].to_int() << 24) |
  (data[offset + 1].to_int() << 16) |
  (data[offset + 2].to_int() << 8) |
  data[offset + 3].to_int()
}
