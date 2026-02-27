///|
test "generate PNG outputs" {
  let manifest : @types.Manifest = {
    name: "TestApp",
    outputs: [{ format: @types.Png, sizes: [16, 32] }],
  }
  let images : Map[Int, Bytes] = {
    16: Bytes::from_array([0x89, 0x50]),
    32: Bytes::from_array([0x89, 0x50, 0x4E, 0x47]),
  }
  let outputs = @iconset.generate(manifest, images)
  assert_eq(outputs.length(), 2)
  assert_eq(outputs[0].filename, "TestApp_16x16.png")
  assert_eq(outputs[0].format, @types.Png)
  assert_eq(outputs[0].data.length(), 2)
  assert_eq(outputs[1].filename, "TestApp_32x32.png")
  assert_eq(outputs[1].data.length(), 4)
}

///|
test "generate ICO output" {
  let manifest : @types.Manifest = {
    name: "MyApp",
    outputs: [{ format: @types.Ico, sizes: [16, 32] }],
  }
  let images : Map[Int, Bytes] = {
    16: Bytes::from_array([0xAA]),
    32: Bytes::from_array([0xBB, 0xCC]),
  }
  let outputs = @iconset.generate(manifest, images)
  assert_eq(outputs.length(), 1)
  assert_eq(outputs[0].filename, "MyApp.ico")
  assert_eq(outputs[0].format, @types.Ico)
  // ICO: 6 header + 2*16 dir + 1+2 data = 41
  assert_eq(outputs[0].data.length(), 41)
  // Verify ICO magic
  assert_eq(outputs[0].data[0], b'\x00')
  assert_eq(outputs[0].data[2], b'\x01')
}

///|
test "generate ICNS output" {
  let manifest : @types.Manifest = {
    name: "App",
    outputs: [{ format: @types.Icns, sizes: [128, 256] }],
  }
  let images : Map[Int, Bytes] = {
    128: Bytes::from_array([0x89, 0x50]),
    256: Bytes::from_array([0x89, 0x50, 0x4E]),
  }
  let outputs = @iconset.generate(manifest, images)
  assert_eq(outputs.length(), 1)
  assert_eq(outputs[0].filename, "App.icns")
  assert_eq(outputs[0].format, @types.Icns)
  // ICNS: 8 header + (8+2) + (8+3) = 29
  assert_eq(outputs[0].data.length(), 29)
  // Verify ICNS magic 'icns'
  assert_eq(outputs[0].data[0], b'\x69')
  assert_eq(outputs[0].data[1], b'\x63')
  assert_eq(outputs[0].data[2], b'\x6E')
  assert_eq(outputs[0].data[3], b'\x73')
}

///|
test "generate mixed formats" {
  let manifest : @types.Manifest = {
    name: "Mixed",
    outputs: [
      { format: @types.Png, sizes: [16] },
      { format: @types.Ico, sizes: [16, 32] },
      { format: @types.Icns, sizes: [128] },
    ],
  }
  let images : Map[Int, Bytes] = {
    16: Bytes::from_array([0xAA]),
    32: Bytes::from_array([0xBB]),
    128: Bytes::from_array([0xCC]),
  }
  let outputs = @iconset.generate(manifest, images)
  // 1 PNG file + 1 ICO file + 1 ICNS file = 3
  assert_eq(outputs.length(), 3)
  assert_eq(outputs[0].format, @types.Png)
  assert_eq(outputs[1].format, @types.Ico)
  assert_eq(outputs[2].format, @types.Icns)
}

///|
test "generate fails on missing image size" {
  let manifest : @types.Manifest = {
    name: "App",
    outputs: [{ format: @types.Png, sizes: [64] }],
  }
  let images : Map[Int, Bytes] = {}
  let result = try? @iconset.generate(manifest, images)
  assert_true(result is Err(_))
}

///|
test "generate from parsed manifest JSON" {
  let json =
    #|{
    #|  "name": "FromJSON",
    #|  "outputs": [
    #|    { "format": "png", "sizes": [16, 32] }
    #|  ]
    #|}
  let manifest = @manifest.parse(json)
  let images : Map[Int, Bytes] = {
    16: Bytes::from_array([0x01]),
    32: Bytes::from_array([0x02]),
  }
  let outputs = @iconset.generate(manifest, images)
  assert_eq(outputs.length(), 2)
  assert_eq(outputs[0].filename, "FromJSON_16x16.png")
  assert_eq(outputs[1].filename, "FromJSON_32x32.png")
}
