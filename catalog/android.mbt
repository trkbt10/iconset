///|
/// Android icon catalog.
///
/// Generates launcher icons for all density buckets (mipmap-*/)
/// and a Play Store listing icon (512x512).
fn android_catalog() -> PlatformCatalog {
  {
    platform: Android,
    description: "Android launcher icons (mipmap density folders + Play Store)",
    containers: [],
    icons: [
      // Standard launcher icons per density
      { pixel_size: 48, filename: "ic_launcher.png", directory: "mipmap-mdpi" },
      { pixel_size: 72, filename: "ic_launcher.png", directory: "mipmap-hdpi" },
      { pixel_size: 96, filename: "ic_launcher.png", directory: "mipmap-xhdpi" },
      {
        pixel_size: 144,
        filename: "ic_launcher.png",
        directory: "mipmap-xxhdpi",
      },
      {
        pixel_size: 192,
        filename: "ic_launcher.png",
        directory: "mipmap-xxxhdpi",
      },
      // Google Play Store listing
      { pixel_size: 512, filename: "ic_launcher-playstore.png", directory: "" },
    ],
  }
}
