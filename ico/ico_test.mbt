///|
test "encode single image ICO" {
  let fake_png = Bytes::from_array([0x89, 0x50, 0x4E, 0x47, 0xDE, 0xAD])
  let images : Array[@types.SizedImage] = [
    { width: 32, height: 32, png_data: fake_png },
  ]
  let result = @ico.encode(images)
  assert_eq(result.length(), 28) // 6 + 16 + 6
  assert_eq(result[0], b'\x00') // reserved
  assert_eq(result[2], b'\x01') // type=ICO
  assert_eq(result[4], b'\x01') // count=1
  assert_eq(result[6], b'\x20') // width=32
  assert_eq(result[7], b'\x20') // height=32
  assert_eq(result[22], b'\x89') // PNG data starts
}

///|
test "encode 256px uses zero in directory" {
  let fake_png = Bytes::from_array([0xAA, 0xBB])
  let images : Array[@types.SizedImage] = [
    { width: 256, height: 256, png_data: fake_png },
  ]
  let result = @ico.encode(images)
  assert_eq(result[6], b'\x00') // 0 means 256
  assert_eq(result[7], b'\x00')
}

///|
test "encode multiple images ICO" {
  let png16 = Bytes::from_array([0x89, 0x50, 0x4E, 0x47])
  let png32 = Bytes::from_array([0x89, 0x50, 0x4E, 0x47, 0x00, 0x00])
  let images : Array[@types.SizedImage] = [
    { width: 16, height: 16, png_data: png16 },
    { width: 32, height: 32, png_data: png32 },
  ]
  let result = @ico.encode(images)
  assert_eq(result.length(), 48) // 6 + 32 + 10
  assert_eq(result[4], b'\x02') // count=2
  assert_eq(result[6], b'\x10') // entry0 width=16
  assert_eq(result[22], b'\x20') // entry1 width=32
}

///|
test "encode empty raises error" {
  let result = try? @ico.encode([])
  assert_true(result is Err(_))
}

///|
test "round-trip: build then parse" {
  let png_a = Bytes::from_array([0x89, 0x50, 0x4E, 0x47, 0x01])
  let png_b = Bytes::from_array([0x89, 0x50, 0x4E, 0x47, 0x02, 0x03])
  let images : Array[@types.SizedImage] = [
    { width: 16, height: 16, png_data: png_a },
    { width: 256, height: 256, png_data: png_b },
  ]
  let built = @ico.encode(images)
  let ctx = @ico.parse(built)
  assert_eq(ctx.entries.length(), 2)
  assert_eq(ctx.entries[0].width, 16)
  assert_eq(ctx.entries[0].height, 16)
  assert_eq(ctx.entries[0].data, png_a)
  assert_eq(ctx.entries[0].bpp, 32)
  assert_eq(ctx.entries[1].width, 256)
  assert_eq(ctx.entries[1].height, 256)
  assert_eq(ctx.entries[1].data, png_b)
}

///|
test "round-trip: build -> parse -> build produces identical bytes" {
  let ctx = @ico.IcoContext::new()
  ctx.add_png(32, 32, Bytes::from_array([0xAA, 0xBB, 0xCC]))
  ctx.add_png(48, 48, Bytes::from_array([0xDD, 0xEE]))
  let first = @ico.build(ctx)
  let parsed = @ico.parse(first)
  let second = @ico.build(parsed)
  assert_eq(first, second)
}

///|
test "context: add_png and sizes" {
  let ctx = @ico.IcoContext::new()
  assert_eq(ctx.sizes(), [])
  ctx.add_png(16, 16, Bytes::from_array([0x01]))
  ctx.add_png(32, 32, Bytes::from_array([0x02]))
  assert_eq(ctx.sizes(), [16, 32])
}

///|
test "context: find entry" {
  let ctx = @ico.IcoContext::new()
  ctx.add_png(48, 48, Bytes::from_array([0xFF]))
  assert_true(ctx.find(48) is Some(_))
  assert_true(ctx.find(16) is None)
}

///|
test "context: remove_size" {
  let ctx = @ico.IcoContext::new()
  ctx.add_png(16, 16, Bytes::from_array([0x01]))
  ctx.add_png(32, 32, Bytes::from_array([0x02]))
  ctx.add_png(48, 48, Bytes::from_array([0x03]))
  ctx.remove_size(32)
  assert_eq(ctx.sizes(), [16, 48])
}

///|
test "context: edit entry data then build" {
  let ctx = @ico.IcoContext::new()
  ctx.add_png(32, 32, Bytes::from_array([0xAA]))
  // Replace entry data via context manipulation
  let entry = ctx.find(32)
  assert_true(entry is Some(_))
  // Remove old, add new with different data
  ctx.remove_size(32)
  ctx.add_png(32, 32, Bytes::from_array([0xBB, 0xCC]))
  let built = @ico.build(ctx)
  let reparsed = @ico.parse(built)
  assert_eq(reparsed.entries[0].data, Bytes::from_array([0xBB, 0xCC]))
}

///|
test "parse: invalid header too short" {
  let result = try? @ico.parse(Bytes::from_array([0x00, 0x00]))
  assert_true(result is Err(_))
}

///|
test "parse: invalid type field" {
  // reserved=0, type=2 (cursor, not icon), count=0
  let data = Bytes::from_array([0x00, 0x00, 0x02, 0x00, 0x00, 0x00])
  let result = try? @ico.parse(data)
  assert_true(result is Err(_))
}
