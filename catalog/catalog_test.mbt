///|
test "catalog_for Windows" {
  let cat = @catalog.catalog_for(@catalog.Windows)
  assert_eq(cat.platform, @catalog.Windows)
  assert_eq(cat.containers.length(), 1) // ICO
  assert_eq(cat.containers[0].format, @types.Ico)
  assert_true(cat.icons.length() > 0)
}

///|
test "catalog_for MacOS" {
  let cat = @catalog.catalog_for(@catalog.MacOS)
  assert_eq(cat.platform, @catalog.MacOS)
  assert_eq(cat.containers.length(), 1) // ICNS
  assert_eq(cat.containers[0].format, @types.Icns)
  assert_eq(cat.icons.length(), 10) // 5 pairs of @1x/@2x
}

///|
test "catalog_for IOS" {
  let cat = @catalog.catalog_for(@catalog.IOS)
  assert_eq(cat.platform, @catalog.IOS)
  assert_eq(cat.containers.length(), 0) // no containers, all PNGs
  assert_true(cat.icons.length() > 10)
}

///|
test "catalog_for Android" {
  let cat = @catalog.catalog_for(@catalog.Android)
  assert_eq(cat.platform, @catalog.Android)
  assert_eq(cat.containers.length(), 0)
  assert_eq(cat.icons.length(), 6) // 5 densities + play store
}

///|
test "catalog_for Ubuntu" {
  let cat = @catalog.catalog_for(@catalog.Ubuntu)
  assert_eq(cat.platform, @catalog.Ubuntu)
  assert_eq(cat.containers.length(), 0)
  assert_eq(cat.icons.length(), 8) // 16..512
}

///|
test "required_sizes Windows" {
  let cat = @catalog.catalog_for(@catalog.Windows)
  let sizes = @catalog.required_sizes(cat)
  inspect(sizes, content="[16, 24, 32, 48, 256]")
}

///|
test "required_sizes MacOS" {
  let cat = @catalog.catalog_for(@catalog.MacOS)
  let sizes = @catalog.required_sizes(cat)
  inspect(sizes, content="[16, 32, 64, 128, 256, 512, 1024]")
}

///|
test "required_sizes IOS" {
  let cat = @catalog.catalog_for(@catalog.IOS)
  let sizes = @catalog.required_sizes(cat)
  // Sorted unique pixel sizes: 20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024
  inspect(
    sizes,
    content="[20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024]",
  )
}

///|
test "required_sizes Android" {
  let cat = @catalog.catalog_for(@catalog.Android)
  let sizes = @catalog.required_sizes(cat)
  inspect(sizes, content="[48, 72, 96, 144, 192, 512]")
}

///|
test "required_sizes Ubuntu" {
  let cat = @catalog.catalog_for(@catalog.Ubuntu)
  let sizes = @catalog.required_sizes(cat)
  inspect(sizes, content="[16, 24, 32, 48, 64, 128, 256, 512]")
}

///|
test "required_sizes_for multiple platforms" {
  let sizes = @catalog.required_sizes_for([@catalog.Windows, @catalog.Android])
  // Windows: 16, 24, 32, 48, 256
  // Android: 48, 72, 96, 144, 192, 512
  // Union sorted: 16, 24, 32, 48, 72, 96, 144, 192, 256, 512
  inspect(sizes, content="[16, 24, 32, 48, 72, 96, 144, 192, 256, 512]")
}

///|
test "all_platforms returns 5 platforms" {
  assert_eq(@catalog.all_platforms().length(), 5)
}

///|
test "generate_catalog Windows" {
  let images : Map[Int, Bytes] = {
    16: Bytes::from_array([0x01]),
    24: Bytes::from_array([0x02]),
    32: Bytes::from_array([0x03]),
    48: Bytes::from_array([0x04]),
    256: Bytes::from_array([0x05]),
  }
  let outputs = @catalog.generate_catalog("TestApp", [@catalog.Windows], images)
  // 1 ICO container + 5 PNG icons = 6 outputs
  assert_eq(outputs.length(), 6)
  assert_eq(outputs[0].filename, "TestApp.ico")
  assert_eq(outputs[0].platform, @catalog.Windows)
  // Check individual PNGs
  assert_eq(outputs[1].filename, "AppList.targetsize-16.png")
  assert_eq(outputs[1].directory, "Assets")
}

///|
test "generate_catalog Android" {
  let images : Map[Int, Bytes] = {
    48: Bytes::from_array([0x01]),
    72: Bytes::from_array([0x02]),
    96: Bytes::from_array([0x03]),
    144: Bytes::from_array([0x04]),
    192: Bytes::from_array([0x05]),
    512: Bytes::from_array([0x06]),
  }
  let outputs = @catalog.generate_catalog("MyApp", [@catalog.Android], images)
  assert_eq(outputs.length(), 6)
  assert_eq(outputs[0].directory, "mipmap-mdpi")
  assert_eq(outputs[0].filename, "ic_launcher.png")
  assert_eq(outputs[5].directory, "")
  assert_eq(outputs[5].filename, "ic_launcher-playstore.png")
}

///|
test "generate_catalog Ubuntu uses app name" {
  let images : Map[Int, Bytes] = {
    16: Bytes::from_array([0x01]),
    24: Bytes::from_array([0x02]),
    32: Bytes::from_array([0x03]),
    48: Bytes::from_array([0x04]),
    64: Bytes::from_array([0x05]),
    128: Bytes::from_array([0x06]),
    256: Bytes::from_array([0x07]),
    512: Bytes::from_array([0x08]),
  }
  let outputs = @catalog.generate_catalog("myapp", [@catalog.Ubuntu], images)
  assert_eq(outputs.length(), 8)
  assert_eq(outputs[0].filename, "myapp.png")
  assert_eq(outputs[0].directory, "hicolor/16x16/apps")
}

///|
test "generate_catalog missing size raises error" {
  let images : Map[Int, Bytes] = {}
  let result = try? @catalog.generate_catalog("App", [@catalog.Windows], images)
  assert_true(result is Err(_))
}
