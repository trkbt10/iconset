///|
/// ICO directory entry: metadata + image data for one icon.
pub(all) struct IcoEntry {
  width : Int
  height : Int
  color_count : Int
  planes : Int
  bpp : Int
  data : Bytes
} derive(Show)

///|
/// ICO context: the intermediate representation between parse and build.
/// Inspect, modify entries, then call `build()` to serialize.
pub(all) struct IcoContext {
  entries : Array[IcoEntry]
} derive(Show)

// ---------------------------------------------------------------------------
// Parse
// ---------------------------------------------------------------------------

///|
/// Parse ICO binary data into an IcoContext.
///
/// ICO layout:
///   Header (6 bytes): reserved(2), type(2)=1, count(2)
///   Directory (16 bytes * count): width, height, colors, reserved,
///     planes(2), bpp(2), data_size(4), data_offset(4)
///   Image data blobs
pub fn parse(data : Bytes) -> IcoContext raise @types.IconsetError {
  if data.length() < 6 {
    raise @types.EncodingError("ICO data too short for header")
  }
  let reserved = read_u16_le(data, 0)
  if reserved != 0 {
    raise @types.EncodingError("ICO reserved field must be 0")
  }
  let icon_type = read_u16_le(data, 2)
  if icon_type != 1 {
    raise @types.EncodingError("ICO type must be 1 (icon), got \{icon_type}")
  }
  let count = read_u16_le(data, 4)
  let min_len = 6 + count * 16
  if data.length() < min_len {
    raise @types.EncodingError("ICO data too short for directory")
  }
  let entries : Array[IcoEntry] = []
  for i in 0..<count {
    let off = 6 + i * 16
    let w_byte = data[off].to_int()
    let h_byte = data[off + 1].to_int()
    let width = if w_byte == 0 { 256 } else { w_byte }
    let height = if h_byte == 0 { 256 } else { h_byte }
    let color_count = data[off + 2].to_int()
    // off+3 is reserved
    let planes = read_u16_le(data, off + 4)
    let bpp = read_u16_le(data, off + 6)
    let data_size = read_u32_le(data, off + 8)
    let data_offset = read_u32_le(data, off + 12)
    if data_offset + data_size > data.length() {
      raise @types.EncodingError(
        "ICO entry \{i} data out of bounds (offset=\{data_offset}, size=\{data_size}, total=\{data.length()})",
      )
    }
    let blob = Bytes::from_iter(
      data[data_offset:data_offset + data_size].iter(),
    )
    entries.push({ width, height, color_count, planes, bpp, data: blob })
  }
  { entries, }
}

// ---------------------------------------------------------------------------
// Context manipulation
// ---------------------------------------------------------------------------

///|
/// Create a new empty IcoContext.
pub fn IcoContext::new() -> IcoContext {
  { entries: [] }
}

///|
/// Add an entry from raw PNG data. Sets standard ICO fields for PNG.
pub fn IcoContext::add_png(
  self : IcoContext,
  width : Int,
  height : Int,
  png_data : Bytes,
) -> Unit {
  self.entries.push({
    width,
    height,
    color_count: 0,
    planes: 1,
    bpp: 32,
    data: png_data,
  })
}

///|
/// Remove all entries matching a given width.
pub fn IcoContext::remove_size(self : IcoContext, width : Int) -> Unit {
  let kept : Array[IcoEntry] = []
  for entry in self.entries {
    if entry.width != width {
      kept.push(entry)
    }
  }
  self.entries.clear()
  for entry in kept {
    self.entries.push(entry)
  }
}

///|
/// Find an entry by width. Returns the first match.
pub fn IcoContext::find(self : IcoContext, width : Int) -> IcoEntry? {
  for entry in self.entries {
    if entry.width == width {
      return Some(entry)
    }
  }
  None
}

///|
/// List all widths present in the context.
pub fn IcoContext::sizes(self : IcoContext) -> Array[Int] {
  let result : Array[Int] = []
  for entry in self.entries {
    result.push(entry.width)
  }
  result
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

///|
/// Build ICO binary from an IcoContext.
pub fn build(ctx : IcoContext) -> Bytes raise @types.IconsetError {
  if ctx.entries.is_empty() {
    raise @types.EmptySizeList
  }
  let buf = @buffer.new(size_hint=1024)
  // ICO Header (6 bytes)
  buf.write_uint16_le(0) // Reserved
  buf.write_uint16_le(1) // Type: 1 = ICO
  buf.write_uint16_le(ctx.entries.length().to_uint16())
  // Calculate data offsets
  let header_size = 6
  let dir_entry_size = 16
  let dir_total = dir_entry_size * ctx.entries.length()
  let mut data_offset = header_size + dir_total
  // Write directory entries
  for entry in ctx.entries {
    let ico_w : Byte = if entry.width >= 256 {
      b'\x00'
    } else {
      entry.width.to_byte()
    }
    let ico_h : Byte = if entry.height >= 256 {
      b'\x00'
    } else {
      entry.height.to_byte()
    }
    buf.write_byte(ico_w)
    buf.write_byte(ico_h)
    buf.write_byte(entry.color_count.to_byte())
    buf.write_byte(b'\x00') // Reserved
    buf.write_uint16_le(entry.planes.reinterpret_as_uint().to_uint16())
    buf.write_uint16_le(entry.bpp.reinterpret_as_uint().to_uint16())
    buf.write_uint_le(entry.data.length().reinterpret_as_uint())
    buf.write_uint_le(data_offset.reinterpret_as_uint())
    data_offset = data_offset + entry.data.length()
  }
  // Write image data
  for entry in ctx.entries {
    buf.write_bytes(entry.data)
  }
  buf.to_bytes()
}

// ---------------------------------------------------------------------------
// Convenience (backward-compatible)
// ---------------------------------------------------------------------------

///|
/// Encode multiple PNG images into an ICO container.
/// Convenience wrapper over the parse->context->build pipeline.
pub fn encode(
  images : Array[@types.SizedImage],
) -> Bytes raise @types.IconsetError {
  let ctx = IcoContext::new()
  for img in images {
    ctx.add_png(img.width, img.height, img.png_data)
  }
  build(ctx)
}

// ---------------------------------------------------------------------------
// Binary helpers
// ---------------------------------------------------------------------------

///|
fn read_u16_le(data : Bytes, offset : Int) -> Int {
  data[offset].to_int() | (data[offset + 1].to_int() << 8)
}

///|
fn read_u32_le(data : Bytes, offset : Int) -> Int {
  data[offset].to_int() |
  (data[offset + 1].to_int() << 8) |
  (data[offset + 2].to_int() << 16) |
  (data[offset + 3].to_int() << 24)
}
