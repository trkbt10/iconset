///|
/// PWA (Progressive Web App) icon catalog.
///
/// Generates icons for web app manifest and a site.webmanifest file.
/// Includes standard icons at multiple sizes and maskable variants.
fn pwa_catalog() -> PlatformCatalog {
  {
    platform: PWA,
    description: "PWA manifest icons (standard + maskable)",
    containers: [],
    icons: [
      // Standard icons
      { pixel_size: 48, filename: "icon-48x48.png", directory: "icons" },
      { pixel_size: 72, filename: "icon-72x72.png", directory: "icons" },
      { pixel_size: 96, filename: "icon-96x96.png", directory: "icons" },
      { pixel_size: 128, filename: "icon-128x128.png", directory: "icons" },
      { pixel_size: 144, filename: "icon-144x144.png", directory: "icons" },
      { pixel_size: 152, filename: "icon-152x152.png", directory: "icons" },
      { pixel_size: 192, filename: "icon-192x192.png", directory: "icons" },
      { pixel_size: 384, filename: "icon-384x384.png", directory: "icons" },
      { pixel_size: 512, filename: "icon-512x512.png", directory: "icons" },
      // Maskable icons (same image data, marked for safe-zone masking)
      { pixel_size: 192, filename: "maskable-192x192.png", directory: "icons" },
      { pixel_size: 512, filename: "maskable-512x512.png", directory: "icons" },
    ],
  }
}

///|
/// Generate a site.webmanifest JSON string for PWA icons.
///
/// `name` is the app display name.
/// `icon_dir` is the relative path prefix for icon src attributes.
pub fn generate_webmanifest(name : String, icon_dir : String) -> String {
  let prefix = if icon_dir == "" { "" } else { icon_dir + "/" }
  let buf = StringBuilder::new()
  buf.write_string("{\n")
  buf.write_string("  \"name\": \"\{name}\",\n")
  buf.write_string("  \"short_name\": \"\{name}\",\n")
  buf.write_string("  \"start_url\": \"/\",\n")
  buf.write_string("  \"display\": \"standalone\",\n")
  buf.write_string("  \"background_color\": \"#ffffff\",\n")
  buf.write_string("  \"theme_color\": \"#ffffff\",\n")
  buf.write_string("  \"icons\": [\n")
  let standard_sizes = [48, 72, 96, 128, 144, 152, 192, 384, 512]
  for i, size in standard_sizes {
    if i > 0 {
      buf.write_string(",\n")
    }
    buf.write_string("    {\n")
    buf.write_string("      \"src\": \"\{prefix}icon-\{size}x\{size}.png\",\n")
    buf.write_string("      \"sizes\": \"\{size}x\{size}\",\n")
    buf.write_string("      \"type\": \"image/png\",\n")
    buf.write_string("      \"purpose\": \"any\"\n")
    buf.write_string("    }")
  }
  let maskable_sizes = [192, 512]
  for size in maskable_sizes {
    buf.write_string(",\n    {\n")
    buf.write_string(
      "      \"src\": \"\{prefix}maskable-\{size}x\{size}.png\",\n",
    )
    buf.write_string("      \"sizes\": \"\{size}x\{size}\",\n")
    buf.write_string("      \"type\": \"image/png\",\n")
    buf.write_string("      \"purpose\": \"maskable\"\n")
    buf.write_string("    }")
  }
  buf.write_string("\n  ]\n}")
  buf.to_string()
}
