///|
/// Web favicon catalog.
///
/// Generates standard favicon set: ICO container, PNG favicons,
/// Apple Touch Icon, and Android Chrome icons.
fn web_catalog() -> PlatformCatalog {
  {
    platform: Web,
    description: "Web favicons (favicon.ico + PNG + Apple Touch Icon)",
    containers: [
      {
        format: @types.Ico,
        filename: "favicon.ico",
        directory: "",
        sizes: [16, 32, 48],
      },
    ],
    icons: [
      { pixel_size: 16, filename: "favicon-16x16.png", directory: "" },
      { pixel_size: 32, filename: "favicon-32x32.png", directory: "" },
      { pixel_size: 180, filename: "apple-touch-icon.png", directory: "" },
      { pixel_size: 192, filename: "android-chrome-192x192.png", directory: "" },
      { pixel_size: 512, filename: "android-chrome-512x512.png", directory: "" },
    ],
  }
}
