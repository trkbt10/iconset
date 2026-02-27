///|
/// Target platform for icon generation.
pub(all) enum Platform {
  Windows
  MacOS
  IOS
  Android
  Ubuntu
  Web
  PWA
} derive(Eq, Show, Hash)

///|
/// An individual PNG icon entry with target path.
pub(all) struct IconEntry {
  pixel_size : Int
  filename : String
  directory : String
} derive(Eq, Show, ToJson)

///|
/// A container file (ICO/ICNS) specification.
pub(all) struct ContainerSpec {
  format : @types.OutputFormat
  filename : String
  directory : String
  sizes : Array[Int]
} derive(Eq, Show, ToJson)

///|
/// Platform-specific icon catalog: what icons to generate for a platform.
pub(all) struct PlatformCatalog {
  platform : Platform
  description : String
  containers : Array[ContainerSpec]
  icons : Array[IconEntry]
} derive(Show, ToJson)

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
    Web => web_catalog()
    PWA => pwa_catalog()
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
  [Windows, MacOS, IOS, Android, Ubuntu, Web, PWA]
}

///|
pub impl ToJson for Platform with to_json(self) {
  match self {
    Windows => Json::string("Windows")
    MacOS => Json::string("MacOS")
    IOS => Json::string("IOS")
    Android => Json::string("Android")
    Ubuntu => Json::string("Ubuntu")
    Web => Json::string("Web")
    PWA => Json::string("PWA")
  }
}

///|
pub impl @json.FromJson for Platform with from_json(json, path) {
  guard json is String(s) else {
    raise @json.JsonDecodeError(
      (path, "Platform: expected string, got \{json}"),
    )
  }
  match s {
    "Windows" => Windows
    "MacOS" | "macOS" => MacOS
    "IOS" | "iOS" => IOS
    "Android" => Android
    "Ubuntu" | "Linux" => Ubuntu
    "Web" => Web
    "PWA" => PWA
    _ => raise @json.JsonDecodeError((path, "Unknown platform: \{s}"))
  }
}
