///|
/// Windows icon catalog.
///
/// Generates:
/// - app.ico: Multi-size ICO container (16, 24, 32, 48, 256)
/// - Individual PNGs for UWP/MSIX (AppList.targetsize-N.png)
fn windows_catalog() -> PlatformCatalog {
  {
    platform: Windows,
    description: "Windows desktop (ICO) and UWP/MSIX app icons",
    containers: [
      {
        format: @types.Ico,
        filename: "app.ico",
        directory: "",
        sizes: [16, 24, 32, 48, 256],
      },
    ],
    icons: [
      {
        pixel_size: 16,
        filename: "AppList.targetsize-16.png",
        directory: "Assets",
      },
      {
        pixel_size: 24,
        filename: "AppList.targetsize-24.png",
        directory: "Assets",
      },
      {
        pixel_size: 32,
        filename: "AppList.targetsize-32.png",
        directory: "Assets",
      },
      {
        pixel_size: 48,
        filename: "AppList.targetsize-48.png",
        directory: "Assets",
      },
      {
        pixel_size: 256,
        filename: "AppList.targetsize-256.png",
        directory: "Assets",
      },
    ],
  }
}
