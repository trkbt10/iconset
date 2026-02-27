///|
test "lookup_image found" {
  let images : Map[Int, Bytes] = { 32: Bytes::from_array([0xAA]) }
  let data = lookup_image(images, 32)
  assert_eq(data.length(), 1)
}

///|
test "lookup_image not found" {
  let images : Map[Int, Bytes] = {}
  let result = try? lookup_image(images, 64)
  assert_true(result is Err(_))
}

///|
test "collect_sized_images" {
  let images : Map[Int, Bytes] = {
    16: Bytes::from_array([0x01]),
    32: Bytes::from_array([0x02, 0x03]),
  }
  let sized = collect_sized_images(images, [16, 32])
  assert_eq(sized.length(), 2)
  assert_eq(sized[0].width, 16)
  assert_eq(sized[0].png_data.length(), 1)
  assert_eq(sized[1].width, 32)
  assert_eq(sized[1].png_data.length(), 2)
}
