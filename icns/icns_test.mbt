///|
test "encode single image ICNS" {
  let fake_png = Bytes::from_array([0x89, 0x50, 0x4E, 0x47])
  let images : Array[@types.SizedImage] = [
    { width: 128, height: 128, png_data: fake_png },
  ]
  let result = @icns.encode(images)
  // Total: 8 (header) + 8 (entry header) + 4 (data) = 20
  assert_eq(result.length(), 20)
  // ICNS magic: 'icns'
  assert_eq(result[0], b'\x69') // 'i'
  assert_eq(result[1], b'\x63') // 'c'
  assert_eq(result[2], b'\x6E') // 'n'
  assert_eq(result[3], b'\x73') // 's'
  // Total size = 20 (big-endian)
  assert_eq(result[4], b'\x00')
  assert_eq(result[5], b'\x00')
  assert_eq(result[6], b'\x00')
  assert_eq(result[7], b'\x14') // 20
  // Entry type: ic07 (128x128)
  assert_eq(result[8], b'\x69') // 'i'
  assert_eq(result[9], b'\x63') // 'c'
  assert_eq(result[10], b'\x30') // '0'
  assert_eq(result[11], b'\x37') // '7'
  // Entry size = 12 (8 + 4 data) big-endian
  assert_eq(result[12], b'\x00')
  assert_eq(result[13], b'\x00')
  assert_eq(result[14], b'\x00')
  assert_eq(result[15], b'\x0C') // 12
  // PNG data
  assert_eq(result[16], b'\x89')
  assert_eq(result[17], b'\x50')
}

///|
test "encode multiple images ICNS" {
  let png16 = Bytes::from_array([0xAA, 0xBB])
  let png256 = Bytes::from_array([0xCC, 0xDD, 0xEE])
  let images : Array[@types.SizedImage] = [
    { width: 16, height: 16, png_data: png16 },
    { width: 256, height: 256, png_data: png256 },
  ]
  let result = @icns.encode(images)
  // Header(8) + entry1(8+2) + entry2(8+3) = 29
  assert_eq(result.length(), 29)
  // First entry type: icp4 (16x16)
  assert_eq(result[8], b'\x69') // 'i'
  assert_eq(result[9], b'\x63') // 'c'
  assert_eq(result[10], b'\x70') // 'p'
  assert_eq(result[11], b'\x34') // '4'
}

///|
test "encode 1024px uses ic10" {
  let fake_png = Bytes::from_array([0xFF])
  let images : Array[@types.SizedImage] = [
    { width: 1024, height: 1024, png_data: fake_png },
  ]
  let result = @icns.encode(images)
  // Entry type: ic10 (1024x1024)
  assert_eq(result[8], b'\x69') // 'i'
  assert_eq(result[9], b'\x63') // 'c'
  assert_eq(result[10], b'\x31') // '1'
  assert_eq(result[11], b'\x30') // '0'
}

///|
test "encode empty images raises error" {
  let images : Array[@types.SizedImage] = []
  let result = try? @icns.encode(images)
  assert_true(result is Err(_))
}

///|
test "encode unsupported size raises error" {
  let fake_png = Bytes::from_array([0xFF])
  let images : Array[@types.SizedImage] = [
    { width: 48, height: 48, png_data: fake_png },
  ]
  let result = try? @icns.encode(images)
  assert_true(result is Err(_))
}

///|
test "encode_full includes retina type codes" {
  let png32 = Bytes::from_array([0xAA])
  let png64 = Bytes::from_array([0xBB])
  let images : Array[@types.SizedImage] = [
    { width: 32, height: 32, png_data: png32 },
    { width: 64, height: 64, png_data: png64 },
  ]
  let result = @icns.encode_full(images)
  // Standard entries: icp5(32) + icp6(64) = 2 entries
  // Retina entries: ic11(32=16@2x) + ic12(64=32@2x) = 2 entries
  // Total: 8 header + 4 * (8+1) = 44
  assert_eq(result.length(), 44)
  // Check: 4 entries in order: icp5, icp6, ic11, ic12
  // Entry 1 at offset 8: icp5 (32x32 standard)
  assert_eq(result[10], b'\x70') // 'p'
  assert_eq(result[11], b'\x35') // '5'
  // Entry 2 at offset 17: icp6 (64x64 standard)
  assert_eq(result[19], b'\x70') // 'p'
  assert_eq(result[20], b'\x36') // '6'
  // Entry 3 at offset 26: ic11 (32=16@2x retina)
  assert_eq(result[28], b'\x31') // '1'
  assert_eq(result[29], b'\x31') // '1'
  // Entry 4 at offset 35: ic12 (64=32@2x retina)
  assert_eq(result[37], b'\x31') // '1'
  assert_eq(result[38], b'\x32') // '2'
}
