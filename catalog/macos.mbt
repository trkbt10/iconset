///|
/// macOS icon catalog.
///
/// Generates:
/// - AppIcon.icns: ICNS container with all modern type codes
/// - .iconset PNGs: 10 files with @1x/@2x naming for iconutil compatibility
fn macos_catalog() -> PlatformCatalog {
  {
    platform: MacOS,
    description: "macOS app icons (ICNS container + .iconset PNGs)",
    containers: [
      {
        format: @types.Icns,
        filename: "AppIcon.icns",
        directory: "",
        sizes: [16, 32, 64, 128, 256, 512, 1024],
      },
    ],
    icons: [
      // .iconset directory: standard + @2x pairs
      // 16pt: @1x = 16px, @2x = 32px
      {
        pixel_size: 16,
        filename: "icon_16x16.png",
        directory: "AppIcon.iconset",
      },
      {
        pixel_size: 32,
        filename: "icon_16x16@2x.png",
        directory: "AppIcon.iconset",
      },
      // 32pt: @1x = 32px, @2x = 64px
      {
        pixel_size: 32,
        filename: "icon_32x32.png",
        directory: "AppIcon.iconset",
      },
      {
        pixel_size: 64,
        filename: "icon_32x32@2x.png",
        directory: "AppIcon.iconset",
      },
      // 128pt: @1x = 128px, @2x = 256px
      {
        pixel_size: 128,
        filename: "icon_128x128.png",
        directory: "AppIcon.iconset",
      },
      {
        pixel_size: 256,
        filename: "icon_128x128@2x.png",
        directory: "AppIcon.iconset",
      },
      // 256pt: @1x = 256px, @2x = 512px
      {
        pixel_size: 256,
        filename: "icon_256x256.png",
        directory: "AppIcon.iconset",
      },
      {
        pixel_size: 512,
        filename: "icon_256x256@2x.png",
        directory: "AppIcon.iconset",
      },
      // 512pt: @1x = 512px, @2x = 1024px
      {
        pixel_size: 512,
        filename: "icon_512x512.png",
        directory: "AppIcon.iconset",
      },
      {
        pixel_size: 1024,
        filename: "icon_512x512@2x.png",
        directory: "AppIcon.iconset",
      },
    ],
  }
}
