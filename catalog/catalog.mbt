///|
/// Target platform for icon generation.
pub(all) enum Platform {
  Windows
  MacOS
  IOS
  Android
  Ubuntu
} derive(Eq, Show, Hash)

///|
/// An individual PNG icon entry with target path.
pub(all) struct IconEntry {
  pixel_size : Int
  filename : String
  directory : String
} derive(Eq, Show)

///|
/// A container file (ICO/ICNS) specification.
pub(all) struct ContainerSpec {
  format : @types.OutputFormat
  filename : String
  directory : String
  sizes : Array[Int]
} derive(Eq, Show)

///|
/// Platform-specific icon catalog: what icons to generate for a platform.
pub(all) struct PlatformCatalog {
  platform : Platform
  description : String
  containers : Array[ContainerSpec]
  icons : Array[IconEntry]
} derive(Show)

///|
/// A generated catalog output with platform and path info.
pub(all) struct CatalogOutput {
  platform : Platform
  directory : String
  filename : String
  data : Bytes
} derive(Show)

///|
/// Get the icon catalog preset for a given platform.
pub fn catalog_for(platform : Platform) -> PlatformCatalog {
  match platform {
    Windows => windows_catalog()
    MacOS => macos_catalog()
    IOS => ios_catalog()
    Android => android_catalog()
    Ubuntu => ubuntu_catalog()
  }
}

///|
/// Get all unique pixel sizes required by a platform catalog, sorted.
pub fn required_sizes(catalog : PlatformCatalog) -> Array[Int] {
  let seen : Map[Int, Unit] = {}
  let sizes : Array[Int] = []
  for container in catalog.containers {
    for size in container.sizes {
      if !seen.contains(size) {
        seen[size] = ()
        sizes.push(size)
      }
    }
  }
  for icon in catalog.icons {
    if !seen.contains(icon.pixel_size) {
      seen[icon.pixel_size] = ()
      sizes.push(icon.pixel_size)
    }
  }
  sizes.sort()
  sizes
}

///|
/// Get all unique pixel sizes required across multiple platforms, sorted.
pub fn required_sizes_for(platforms : Array[Platform]) -> Array[Int] {
  let seen : Map[Int, Unit] = {}
  let sizes : Array[Int] = []
  for platform in platforms {
    let catalog = catalog_for(platform)
    let platform_sizes = required_sizes(catalog)
    for size in platform_sizes {
      if !seen.contains(size) {
        seen[size] = ()
        sizes.push(size)
      }
    }
  }
  sizes.sort()
  sizes
}

///|
/// All supported platforms.
pub fn all_platforms() -> Array[Platform] {
  [Windows, MacOS, IOS, Android, Ubuntu]
}
