///|
test "parse valid manifest" {
  let json =
    #|{
    #|  "name": "MyApp",
    #|  "outputs": [
    #|    { "format": "png", "sizes": [16, 32, 256] },
    #|    { "format": "ico", "sizes": [16, 32, 48] },
    #|    { "format": "icns", "sizes": [128, 256, 512] }
    #|  ]
    #|}
  let manifest = @manifest.parse(json)
  assert_eq(manifest.name, "MyApp")
  assert_eq(manifest.outputs.length(), 3)
  assert_eq(manifest.outputs[0].format, @types.Png)
  assert_eq(manifest.outputs[1].format, @types.Ico)
  assert_eq(manifest.outputs[2].format, @types.Icns)
}

///|
test "parse invalid JSON" {
  let result = try? @manifest.parse("{invalid}")
  assert_true(result is Err(_))
}

///|
test "parse wrong schema" {
  let bad_schema =
    #|{"name": 42}
  let result = try? @manifest.parse(bad_schema)
  assert_true(result is Err(_))
}

///|
test "validate empty name" {
  let manifest : @types.Manifest = {
    name: "",
    outputs: [{ format: @types.Png, sizes: [16] }],
  }
  let result = try? @manifest.validate(manifest)
  assert_true(result is Err(_))
}

///|
test "validate empty outputs" {
  let manifest : @types.Manifest = { name: "App", outputs: [] }
  let result = try? @manifest.validate(manifest)
  assert_true(result is Err(_))
}

///|
test "validate empty sizes" {
  let manifest : @types.Manifest = {
    name: "App",
    outputs: [{ format: @types.Png, sizes: [] }],
  }
  let result = try? @manifest.validate(manifest)
  assert_true(result is Err(_))
}

///|
test "validate invalid ICO size" {
  let manifest : @types.Manifest = {
    name: "App",
    outputs: [{ format: @types.Ico, sizes: [100] }],
  }
  let result = try? @manifest.validate(manifest)
  assert_true(result is Err(_))
}

///|
test "validate invalid ICNS size" {
  let manifest : @types.Manifest = {
    name: "App",
    outputs: [{ format: @types.Icns, sizes: [48] }],
  }
  let result = try? @manifest.validate(manifest)
  assert_true(result is Err(_))
}

///|
test "validate valid manifest" {
  let manifest : @types.Manifest = {
    name: "MyApp",
    outputs: [
      { format: @types.Png, sizes: [16, 128, 512] },
      { format: @types.Ico, sizes: [16, 32, 256] },
      { format: @types.Icns, sizes: [128, 256, 1024] },
    ],
  }
  @manifest.validate(manifest)
}

///|
test "collect_sizes deduplicates and sorts" {
  let manifest : @types.Manifest = {
    name: "App",
    outputs: [
      { format: @types.Png, sizes: [256, 16, 32] },
      { format: @types.Ico, sizes: [32, 48, 16] },
    ],
  }
  let sizes = @manifest.collect_sizes(manifest)
  inspect(sizes, content="[16, 32, 48, 256]")
}
