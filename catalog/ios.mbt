///|
/// iOS icon catalog.
///
/// Generates icons for iPhone, iPad, and App Store.
/// Modern Xcode 14+ only requires a single 1024x1024 PNG, but we also
/// generate the full legacy set for compatibility with older Xcode versions.
fn ios_catalog() -> PlatformCatalog {
  {
    platform: IOS,
    description: "iOS/iPadOS app icons (AppIcon.appiconset)",
    containers: [],
    icons: [
      // App Store (required)
      {
        pixel_size: 1024,
        filename: "AppIcon-1024.png",
        directory: "AppIcon.appiconset",
      },
      // iPhone Notification 20pt @2x, @3x
      {
        pixel_size: 40,
        filename: "Icon-App-20x20@2x.png",
        directory: "AppIcon.appiconset",
      },
      {
        pixel_size: 60,
        filename: "Icon-App-20x20@3x.png",
        directory: "AppIcon.appiconset",
      },
      // iPhone Settings 29pt @2x, @3x
      {
        pixel_size: 58,
        filename: "Icon-App-29x29@2x.png",
        directory: "AppIcon.appiconset",
      },
      {
        pixel_size: 87,
        filename: "Icon-App-29x29@3x.png",
        directory: "AppIcon.appiconset",
      },
      // iPhone Spotlight 40pt @2x, @3x
      {
        pixel_size: 80,
        filename: "Icon-App-40x40@2x.png",
        directory: "AppIcon.appiconset",
      },
      {
        pixel_size: 120,
        filename: "Icon-App-40x40@3x.png",
        directory: "AppIcon.appiconset",
      },
      // iPhone Home Screen 60pt @2x, @3x
      {
        pixel_size: 120,
        filename: "Icon-App-60x60@2x.png",
        directory: "AppIcon.appiconset",
      },
      {
        pixel_size: 180,
        filename: "Icon-App-60x60@3x.png",
        directory: "AppIcon.appiconset",
      },
      // iPad Notification 20pt @1x, @2x
      {
        pixel_size: 20,
        filename: "Icon-App-20x20@1x.png",
        directory: "AppIcon.appiconset",
      },
      // iPad Settings 29pt @1x
      {
        pixel_size: 29,
        filename: "Icon-App-29x29@1x.png",
        directory: "AppIcon.appiconset",
      },
      // iPad Spotlight 40pt @1x
      {
        pixel_size: 40,
        filename: "Icon-App-40x40@1x.png",
        directory: "AppIcon.appiconset",
      },
      // iPad Home Screen 76pt @1x, @2x
      {
        pixel_size: 76,
        filename: "Icon-App-76x76@1x.png",
        directory: "AppIcon.appiconset",
      },
      {
        pixel_size: 152,
        filename: "Icon-App-76x76@2x.png",
        directory: "AppIcon.appiconset",
      },
      // iPad Pro Home Screen 83.5pt @2x
      {
        pixel_size: 167,
        filename: "Icon-App-83.5x83.5@2x.png",
        directory: "AppIcon.appiconset",
      },
    ],
  }
}
