///|
test "encode single image ICO" {
  let fake_png = Bytes::from_array([0x89, 0x50, 0x4E, 0x47, 0xDE, 0xAD])
  let images : Array[@types.SizedImage] = [
    { width: 32, height: 32, png_data: fake_png },
  ]
  let result = @ico.encode(images)
  // ICO header: reserved(2) + type(2) + count(2) = 6 bytes
  // Directory: 1 entry * 16 bytes = 16 bytes
  // Data: 6 bytes
  // Total: 28 bytes
  assert_eq(result.length(), 28)
  // Check ICO magic: reserved=0, type=1
  assert_eq(result[0], b'\x00')
  assert_eq(result[1], b'\x00')
  assert_eq(result[2], b'\x01') // type low byte
  assert_eq(result[3], b'\x00') // type high byte
  assert_eq(result[4], b'\x01') // count low byte
  assert_eq(result[5], b'\x00') // count high byte
  // Directory entry: width=32, height=32
  assert_eq(result[6], b'\x20') // width 32
  assert_eq(result[7], b'\x20') // height 32
  // Data starts at offset 22 (6 + 16)
  assert_eq(result[22], b'\x89') // PNG signature byte
  assert_eq(result[23], b'\x50') // 'P'
}

///|
test "encode 256px uses zero in directory" {
  let fake_png = Bytes::from_array([0xAA, 0xBB])
  let images : Array[@types.SizedImage] = [
    { width: 256, height: 256, png_data: fake_png },
  ]
  let result = @ico.encode(images)
  // Width/height 256 should be encoded as 0 in ICO format
  assert_eq(result[6], b'\x00') // width = 0 means 256
  assert_eq(result[7], b'\x00') // height = 0 means 256
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
  // Header(6) + 2 entries(32) + data(4+6) = 48
  assert_eq(result.length(), 48)
  // Count = 2
  assert_eq(result[4], b'\x02')
  assert_eq(result[5], b'\x00')
  // First entry width=16
  assert_eq(result[6], b'\x10')
  // Second entry width=32 (at offset 6+16=22)
  assert_eq(result[22], b'\x20')
}

///|
test "encode empty images raises error" {
  let images : Array[@types.SizedImage] = []
  let result = try? @ico.encode(images)
  assert_true(result is Err(_))
}
