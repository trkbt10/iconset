///|
test "OutputFormat round-trip JSON" {
  let formats : Array[@types.OutputFormat] = [
    @types.Png,
    @types.Ico,
    @types.Icns,
  ]
  for fmt in formats {
    let json = fmt.to_json()
    let decoded : @types.OutputFormat = @json.from_json(json)
    assert_eq(fmt, decoded)
  }
}

///|
test "OutputFormat JSON string values" {
  inspect(
    @types.OutputFormat::Png.to_json(),
    content=(
      #|String("png")
    ),
  )
  inspect(
    @types.OutputFormat::Ico.to_json(),
    content=(
      #|String("ico")
    ),
  )
  inspect(
    @types.OutputFormat::Icns.to_json(),
    content=(
      #|String("icns")
    ),
  )
}

///|
test "Manifest round-trip JSON" {
  let manifest : @types.Manifest = {
    name: "TestApp",
    outputs: [
      { format: @types.Png, sizes: [16, 32, 256] },
      { format: @types.Ico, sizes: [16, 32, 48] },
    ],
  }
  let json = manifest.to_json()
  let decoded : @types.Manifest = @json.from_json(json)
  assert_eq(manifest, decoded)
}

///|
test "OutputFormat invalid string" {
  let json = Json::string("svg")
  let result : Result[@types.OutputFormat, _] = try? @json.from_json(json)
  assert_true(result is Err(_))
}
