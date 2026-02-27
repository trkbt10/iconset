///|
/// Encode multiple PNG images into an ICO container.
///
/// ICO format (modern, PNG-embedded):
///   Header (6 bytes): reserved=0, type=1 (icon), count=N
///   Directory entries (16 bytes each): width, height, colors, reserved,
///     planes, bpp, data_size, data_offset
///   Image data: concatenated PNG blobs
pub fn encode(
  images : Array[@types.SizedImage],
) -> Bytes raise @types.IconsetError {
  if images.is_empty() {
    raise @types.EmptySizeList
  }
  let buf = @buffer.new(size_hint=1024)
  // ICO Header (6 bytes)
  buf.write_uint16_le(0) // Reserved
  buf.write_uint16_le(1) // Type: 1 = ICO
  buf.write_uint16_le(images.length().to_uint16())
  // Calculate data offsets
  let header_size = 6
  let dir_entry_size = 16
  let dir_total = dir_entry_size * images.length()
  let mut data_offset = header_size + dir_total
  // Write directory entries
  for img in images {
    // Width/height: 0 means 256 in ICO spec
    let ico_w : Byte = if img.width >= 256 {
      b'\x00'
    } else {
      img.width.to_byte()
    }
    let ico_h : Byte = if img.height >= 256 {
      b'\x00'
    } else {
      img.height.to_byte()
    }
    buf.write_byte(ico_w) // Width
    buf.write_byte(ico_h) // Height
    buf.write_byte(b'\x00') // Color palette count (0 for PNG)
    buf.write_byte(b'\x00') // Reserved
    buf.write_uint16_le(1) // Color planes
    buf.write_uint16_le(32) // Bits per pixel
    buf.write_uint_le(img.png_data.length().reinterpret_as_uint()) // Data size
    buf.write_uint_le(data_offset.reinterpret_as_uint()) // Data offset
    data_offset = data_offset + img.png_data.length()
  }
  // Write image data
  for img in images {
    buf.write_bytes(img.png_data)
  }
  buf.to_bytes()
}
