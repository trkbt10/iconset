///|
test "encode single image ICNS" {
  let fake_png = Bytes::from_array([0x89, 0x50, 0x4E, 0x47])
  let images : Array[@types.SizedImage] = [
    { width: 128, height: 128, png_data: fake_png },
  ]
  let result = @icns.encode(images)
  assert_eq(result.length(), 20) // 8 + (8+4)
  assert_eq(result[0], b'\x69') // 'i'
  assert_eq(result[1], b'\x63') // 'c'
  assert_eq(result[2], b'\x6E') // 'n'
  assert_eq(result[3], b'\x73') // 's'
  // ic07 type code for 128x128
  assert_eq(result[8], b'\x69')
  assert_eq(result[9], b'\x63')
  assert_eq(result[10], b'\x30') // '0'
  assert_eq(result[11], b'\x37') // '7'
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
  assert_eq(result.length(), 29) // 8 + (8+2) + (8+3)
  // First entry type: icp4
  assert_eq(result[10], b'\x70') // 'p'
  assert_eq(result[11], b'\x34') // '4'
}

///|
test "encode 1024px uses ic10" {
  let images : Array[@types.SizedImage] = [
    { width: 1024, height: 1024, png_data: Bytes::from_array([0xFF]) },
  ]
  let result = @icns.encode(images)
  assert_eq(result[10], b'\x31') // '1'
  assert_eq(result[11], b'\x30') // '0'
}

///|
test "encode empty raises error" {
  let result = try? @icns.encode([])
  assert_true(result is Err(_))
}

///|
test "encode unsupported size raises error" {
  let images : Array[@types.SizedImage] = [
    { width: 48, height: 48, png_data: Bytes::from_array([0xFF]) },
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
  // 4 entries: icp5(32), icp6(64), ic11(32), ic12(64)
  assert_eq(result.length(), 44) // 8 + 4*(8+1)
}

///|
test "round-trip: build then parse" {
  let png_a = Bytes::from_array([0x89, 0x50, 0x4E, 0x47, 0x01])
  let png_b = Bytes::from_array([0x89, 0x50, 0x02, 0x03])
  let images : Array[@types.SizedImage] = [
    { width: 16, height: 16, png_data: png_a },
    { width: 256, height: 256, png_data: png_b },
  ]
  let built = @icns.encode(images)
  let ctx = @icns.parse(built)
  assert_eq(ctx.entries.length(), 2)
  // icp4 entry
  assert_eq(ctx.entries[0].type_code, @icns.standard_types[0].code)
  assert_eq(ctx.entries[0].data, png_a)
  // ic08 entry
  assert_eq(ctx.entries[1].type_code, @icns.standard_types[4].code)
  assert_eq(ctx.entries[1].data, png_b)
}

///|
test "round-trip: build -> parse -> build produces identical bytes" {
  let ctx = @icns.IcnsContext::new()
  ctx.add_png(128, Bytes::from_array([0xAA, 0xBB, 0xCC]))
  ctx.add_png(512, Bytes::from_array([0xDD, 0xEE]))
  let first = @icns.build(ctx)
  let parsed = @icns.parse(first)
  let second = @icns.build(parsed)
  assert_eq(first, second)
}

///|
test "round-trip: encode_full -> parse -> build" {
  let images : Array[@types.SizedImage] = [
    { width: 32, height: 32, png_data: Bytes::from_array([0x01]) },
    { width: 128, height: 128, png_data: Bytes::from_array([0x02]) },
    { width: 256, height: 256, png_data: Bytes::from_array([0x03]) },
  ]
  let first = @icns.encode_full(images)
  let parsed = @icns.parse(first)
  let second = @icns.build(parsed)
  assert_eq(first, second)
  // Should have standard + retina entries
  // 32: icp5 + ic11, 128: ic07, 256: ic08 + ic13 = 5 entries
  assert_eq(parsed.entries.length(), 5)
}

///|
test "context: new and add" {
  let ctx = @icns.IcnsContext::new()
  assert_eq(ctx.entries.length(), 0)
  ctx.add_png(16, Bytes::from_array([0x01]))
  ctx.add_png(32, Bytes::from_array([0x02]))
  assert_eq(ctx.entries.length(), 2)
}

///|
test "context: add raw type code" {
  let ctx = @icns.IcnsContext::new()
  let custom_code = Bytes::from_array([0x54, 0x45, 0x53, 0x54]) // "TEST"
  ctx.add(custom_code, Bytes::from_array([0xFF]))
  assert_eq(ctx.entries.length(), 1)
  assert_eq(ctx.entries[0].type_code, custom_code)
}

///|
test "context: find and type_codes" {
  let ctx = @icns.IcnsContext::new()
  ctx.add_png(128, Bytes::from_array([0xAA]))
  let ic07 = @icns.standard_types[3].code // ic07
  assert_true(ctx.find(ic07) is Some(_))
  assert_true(ctx.find(Bytes::from_array([0x00, 0x00, 0x00, 0x00])) is None)
  assert_eq(ctx.type_codes().length(), 1)
}

///|
test "context: remove_type" {
  let ctx = @icns.IcnsContext::new()
  ctx.add_png(16, Bytes::from_array([0x01]))
  ctx.add_png(128, Bytes::from_array([0x02]))
  let icp4 = @icns.standard_types[0].code
  ctx.remove_type(icp4)
  assert_eq(ctx.entries.length(), 1)
  assert_eq(ctx.type_codes().length(), 1)
}

///|
test "context: add_png_full adds standard and retina" {
  let ctx = @icns.IcnsContext::new()
  ctx.add_png_full(32, Bytes::from_array([0xAA]))
  // 32px has: icp5 (standard) + ic11 (retina)
  assert_eq(ctx.entries.length(), 2)
}

///|
test "context: edit entry then rebuild" {
  let ctx = @icns.IcnsContext::new()
  ctx.add_png(128, Bytes::from_array([0xAA]))
  let ic07 = @icns.standard_types[3].code
  // Replace: remove old, add new data
  ctx.remove_type(ic07)
  ctx.add(ic07, Bytes::from_array([0xBB, 0xCC]))
  let built = @icns.build(ctx)
  let reparsed = @icns.parse(built)
  assert_eq(reparsed.entries[0].data, Bytes::from_array([0xBB, 0xCC]))
}

///|
test "resolve_type known" {
  let icp4 = @icns.standard_types[0].code
  let resolved = @icns.resolve_type(icp4)
  assert_true(resolved is Some(_))
  guard resolved is Some(t) else { panic() }
  assert_eq(t.pixel_size, 16)
}

///|
test "resolve_type retina" {
  let ic11 = @icns.retina_types[0].code
  let resolved = @icns.resolve_type(ic11)
  assert_true(resolved is Some(_))
  guard resolved is Some(t) else { panic() }
  assert_eq(t.pixel_size, 32)
  assert_eq(t.description, "16@2x")
}

///|
test "resolve_type unknown" {
  let unknown = Bytes::from_array([0x00, 0x00, 0x00, 0x00])
  assert_true(@icns.resolve_type(unknown) is None)
}

///|
test "parse: invalid magic" {
  let data = Bytes::from_array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08])
  let result = try? @icns.parse(data)
  assert_true(result is Err(_))
}

///|
test "parse: too short" {
  let result = try? @icns.parse(Bytes::from_array([0x69, 0x63]))
  assert_true(result is Err(_))
}
