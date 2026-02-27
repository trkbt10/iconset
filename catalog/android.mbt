///|
/// Android adaptive icon options.
///
/// Provides foreground, background, and optional monochrome layers
/// for generating Android adaptive icons (API 26+).
pub(all) struct AndroidOptions {
  foreground : Map[Int, Bytes]
  background : AndroidBackground
  monochrome : Map[Int, Bytes]?
} derive(Show)

///|
/// Android adaptive icon background: solid color or image layers.
pub(all) enum AndroidBackground {
  Color(String)
  Image(Map[Int, Bytes])
} derive(Show)

///|
/// Density bucket specification for Android icons.
priv struct DensitySpec {
  dir : String
  adaptive_size : Int
  legacy_size : Int
}

///|
/// All Android density buckets with adaptive and legacy sizes.
let android_densities : Array[DensitySpec] = [
  { dir: "mipmap-mdpi", adaptive_size: 108, legacy_size: 48 },
  { dir: "mipmap-hdpi", adaptive_size: 162, legacy_size: 72 },
  { dir: "mipmap-xhdpi", adaptive_size: 216, legacy_size: 96 },
  { dir: "mipmap-xxhdpi", adaptive_size: 324, legacy_size: 144 },
  { dir: "mipmap-xxxhdpi", adaptive_size: 432, legacy_size: 192 },
]

///|
/// All adaptive icon pixel sizes (108dp canvas at each density).
pub let adaptive_icon_sizes : Array[Int] = [108, 162, 216, 324, 432]

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

///|
/// Generate adaptive icon XML for mipmap-anydpi-v26.
///
/// References drawable resources for foreground, background, and optionally monochrome.
pub fn generate_adaptive_xml(
  bg_is_color : Bool,
  has_monochrome : Bool,
) -> String {
  let buf = StringBuilder::new()
  buf.write_string(
    "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<adaptive-icon xmlns:android=\"http://schemas.android.com/apk/res/android\">\n",
  )
  if bg_is_color {
    buf.write_string(
      "    <background android:drawable=\"@color/ic_launcher_background\" />\n",
    )
  } else {
    buf.write_string(
      "    <background android:drawable=\"@drawable/ic_launcher_background\" />\n",
    )
  }
  buf.write_string(
    "    <foreground android:drawable=\"@drawable/ic_launcher_foreground\" />\n",
  )
  if has_monochrome {
    buf.write_string(
      "    <monochrome android:drawable=\"@drawable/ic_launcher_monochrome\" />\n",
    )
  }
  buf.write_string("</adaptive-icon>\n")
  buf.to_string()
}

///|
/// Generate a color resource XML for the background color.
pub fn generate_background_color_xml(color : String) -> String {
  let buf = StringBuilder::new()
  buf.write_string("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<resources>\n")
  buf.write_string(
    "    <color name=\"ic_launcher_background\">\{color}</color>\n",
  )
  buf.write_string("</resources>\n")
  buf.to_string()
}
