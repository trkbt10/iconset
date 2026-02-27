# trkbt10/iconset

A cross-platform icon set generator written in [MoonBit](https://www.moonbitlang.com/). Generate all the icons your app needs — ICO, ICNS, PNGs, adaptive icons, web manifests — from a single source PNG.

**[Try it in your browser](https://trkbt10.github.io/iconset/)** — no install required.

## Supported Platforms

| Platform | Outputs |
|----------|---------|
| **Windows** | `.ico` (16–256px), `Assets/AppList.targetsize-*.png` |
| **macOS** | `.icns` (16–1024px), `.iconset/` folder with @1x/@2x PNGs |
| **iOS** | App icon PNGs for all required sizes (20–1024px) |
| **Android** | Legacy `mipmap-*/ic_launcher.png`, adaptive foreground/background/monochrome layers, XML configs |
| **Ubuntu** | `hicolor/` theme PNGs (16–512px) |
| **Web** | `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `android-chrome-*.png` |
| **PWA** | Standard + maskable icon PNGs (48–512px), `site.webmanifest` |

## Demo

The [online demo](https://trkbt10.github.io/iconset/) runs entirely in your browser using the compiled MoonBit → JS module. Upload a PNG, select platforms, and download a ZIP of all generated icons.

## Usage

### CLI (Native)

Create an `iconset.json` in your project root:

```json
{
  "name": "MyApp",
  "source": "./icon-1024x1024.png",
  "output": "./_output",
  "platforms": ["Windows", "MacOS", "IOS", "Android", "Ubuntu", "Web", "PWA"],
  "resize_method": "bilinear"
}
```

Run the generator:

```bash
moon run --target native cmd/generate
```

All icons are written to the `_output/` directory, organized by platform.

#### Android Adaptive Icons

To generate [adaptive icons](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive), add an `android` section:

```json
{
  "name": "MyApp",
  "source": "./icon-1024x1024.png",
  "output": "./_output",
  "platforms": ["Android"],
  "android": {
    "adaptive": true,
    "foreground": "./foreground-1024x1024.png",
    "background_color": "#FFFFFF",
    "monochrome": "./monochrome-1024x1024.png"
  }
}
```

This generates the full Android adaptive icon structure:

```
Android/
  mipmap-mdpi/       ic_launcher.png, ic_launcher_round.png, ic_launcher_foreground.png
  mipmap-hdpi/       ...
  mipmap-xhdpi/      ...
  mipmap-xxhdpi/     ...
  mipmap-xxxhdpi/    ...
  mipmap-anydpi-v26/ ic_launcher.xml, ic_launcher_round.xml
  values/            ic_launcher_background.xml
```

You can also use `"background_image"` instead of `"background_color"` for an image-based background layer.

### Config Reference

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | App name (used in filenames) |
| `source` | string | Path to source PNG (1024x1024 recommended) |
| `output` | string | Output directory |
| `platforms` | string[] | Target platforms |
| `resize_method` | string? | `"nearest"`, `"bilinear"` (default), or `"bicubic"` |
| `android.adaptive` | bool | Enable adaptive icon generation |
| `android.foreground` | string | Path to foreground layer PNG |
| `android.background_color` | string? | Hex color (e.g. `"#FFFFFF"`) |
| `android.background_image` | string? | Path to background layer PNG |
| `android.monochrome` | string? | Path to monochrome layer PNG |

### Node.js / JavaScript

Install the npm package:

```bash
npm install @trkbt10/iconset-wasm
```

Build from source:

```bash
bash scripts/build-js.sh
```

#### Encode ICO / ICNS

```js
import { createIconSession } from "@trkbt10/iconset-wasm";
import fs from "fs";

const session = createIconSession();

// Add PNG images for each required size
session.addImage(16, fs.readFileSync("icon-16.png"));
session.addImage(32, fs.readFileSync("icon-32.png"));
session.addImage(48, fs.readFileSync("icon-48.png"));
session.addImage(256, fs.readFileSync("icon-256.png"));

// Encode ICO
const ico = session.encodeIco([16, 32, 48, 256]);
fs.writeFileSync("favicon.ico", ico);

// Encode ICNS
session.addImage(128, fs.readFileSync("icon-128.png"));
session.addImage(512, fs.readFileSync("icon-512.png"));
const icns = session.encodeIcns([16, 32, 128, 256, 512]);
fs.writeFileSync("AppIcon.icns", icns);

session.destroy();
```

#### Single-Image Encoding

```js
import { encodeIcoSingle, encodeIcnsSingle } from "@trkbt10/iconset-wasm";
import fs from "fs";

const png = fs.readFileSync("icon-32.png");

const ico = encodeIcoSingle(32, 32, png);
const icns = encodeIcnsSingle(32, 32, png);
```

#### Query Platform Catalog

```js
import { getAllPlatforms, getRequiredSizes, getCatalogJson } from "@trkbt10/iconset-wasm";

// List all supported platforms
getAllPlatforms();
// => ["Windows", "MacOS", "IOS", "Android", "Ubuntu", "Web", "PWA"]

// Get required pixel sizes
getRequiredSizes(["Windows", "Web"]);
// => [16, 24, 32, 48, 180, 192, 256, 512]

// Get full catalog for a platform
const catalog = getCatalogJson("PWA");
// => { platform: "PWA", containers: [], icons: [...], ... }
```

#### Generate Supporting Files

```js
import { generateWebmanifest, generateAdaptiveXml, generateBgColorXml } from "@trkbt10/iconset-wasm";

// PWA web manifest
const manifest = generateWebmanifest("MyApp", "/icons");
fs.writeFileSync("site.webmanifest", manifest);

// Android adaptive icon XML
const xml = generateAdaptiveXml(true, false);
fs.writeFileSync("ic_launcher.xml", xml);

// Android background color XML
const colorXml = generateBgColorXml("#4A90D9");
fs.writeFileSync("ic_launcher_background.xml", colorXml);
```

### MoonBit Library

Add the dependency:

```bash
moon add trkbt10/iconset
```

Use the catalog API to query platform specifications and generate icons:

```moonbit
let platforms = @catalog.all_platforms()
let sizes = @catalog.required_sizes_for([Windows, Web])
let catalog = @catalog.catalog_for(Windows)
```

Generate ICO/ICNS directly:

```moonbit
let ico_bytes = @ico.encode([{ width: 32, height: 32, png_data }])
let icns_bytes = @icns.encode([{ width: 128, height: 128, png_data }])
```

## Development

```bash
moon check --deny-warn   # Type check
moon test                # Run 83 tests
moon fmt                 # Format code
moon info                # Update .mbti interfaces
```

### Build Targets

```bash
# Native CLI
moon build --target native cmd/generate

# JavaScript (ESM)
bash scripts/build-js.sh    # => npm/iconset.js

# WebAssembly (wasm-gc)
bash scripts/build-wasm.sh  # => npm/iconset.wasm
```

### Smoke Tests

```bash
node scripts/smoke-test-js.mjs   # 14 tests for JS module
bash scripts/smoke-test-cli.sh   # End-to-end CLI verification
```

## Project Structure

```
iconset/
  iconset.mbt            Root-level generate API
  types/                  Core types (Manifest, OutputFormat, SizedImage, errors)
  ico/                    ICO encoder/decoder with round-trip support
  icns/                   ICNS encoder/decoder with round-trip support
  manifest/               Manifest JSON parsing and validation
  catalog/                Platform catalogs, generation orchestrator
  config/                 Config file parsing (iconset.json)
  cmd/
    generate/             Config-driven CLI entry point
    wasm/                 WASM/JS bridge (14 exported functions)
  npm/                    npm package (@trkbt10/iconset-wasm)
  docs/                   GitHub Pages demo (browser-based generator)
  scripts/                Build and smoke test scripts
```

## License

Apache-2.0
