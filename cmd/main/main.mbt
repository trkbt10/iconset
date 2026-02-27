///|
/// CLI entry point for iconset generation.
/// Run with: moon run cmd/main
///
/// Demonstrates the platform catalog API.
fn main {
  println("=== iconset: Platform Icon Catalog ===")
  println("")
  let platforms = @catalog.all_platforms()
  for platform in platforms {
    let cat = @catalog.catalog_for(platform)
    let sizes = @catalog.required_sizes(cat)
    let container_count = cat.containers.length()
    let icon_count = cat.icons.length()
    println("[\{platform}] \{cat.description}")
    println("  Containers: \{container_count}, Icons: \{icon_count}")
    println("  Required pixel sizes: \{sizes}")
    for container in cat.containers {
      println(
        "  -> \{container.filename} (\{container.format}, \{container.sizes.length()} sizes)",
      )
    }
    println("")
  }
  let all_sizes = @catalog.required_sizes_for(platforms)
  println("All platforms combined: \{all_sizes.length()} unique sizes")
  println("Sizes: \{all_sizes}")
}
