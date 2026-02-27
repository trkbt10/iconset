///|
/// Ubuntu/Linux icon catalog.
///
/// Follows the freedesktop.org hicolor icon theme specification.
/// Generates PNGs in hicolor/{size}x{size}/apps/ directories.
fn ubuntu_catalog() -> PlatformCatalog {
  {
    platform: Ubuntu,
    description: "Linux freedesktop.org hicolor icon theme",
    containers: [],
    icons: [
      { pixel_size: 16, filename: "app.png", directory: "hicolor/16x16/apps" },
      { pixel_size: 24, filename: "app.png", directory: "hicolor/24x24/apps" },
      { pixel_size: 32, filename: "app.png", directory: "hicolor/32x32/apps" },
      { pixel_size: 48, filename: "app.png", directory: "hicolor/48x48/apps" },
      { pixel_size: 64, filename: "app.png", directory: "hicolor/64x64/apps" },
      {
        pixel_size: 128,
        filename: "app.png",
        directory: "hicolor/128x128/apps",
      },
      {
        pixel_size: 256,
        filename: "app.png",
        directory: "hicolor/256x256/apps",
      },
      {
        pixel_size: 512,
        filename: "app.png",
        directory: "hicolor/512x512/apps",
      },
    ],
  }
}
