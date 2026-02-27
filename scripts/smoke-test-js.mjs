/**
 * Smoke test for the @trkbt10/iconset-wasm npm package.
 * Tests the JS backend (ESM) output.
 *
 * Usage: node scripts/smoke-test-js.mjs
 * Prerequisites: bash scripts/build-js.sh
 */

import {
  encodeIcoSingle,
  encodeIcnsSingle,
  validateManifest,
  createIconSession,
  getAllPlatforms,
  getRequiredSizes,
  getCatalogJson,
  generateWebmanifest,
  generateAdaptiveXml,
  generateBgColorXml,
} from "../npm/index.js";

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  OK: ${name}`);
    passed++;
  } catch (e) {
    console.log(`  FAIL: ${name} - ${e.message}`);
    failed++;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || "Assertion failed");
}

// Minimal valid 1x1 PNG (67 bytes)
const TINY_PNG = new Uint8Array([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
  0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xde, 0x00, 0x00, 0x00,
  0x0c, 0x49, 0x44, 0x41, 0x54, 0x08, 0xd7, 0x63, 0xf8, 0xcf, 0xc0, 0x00,
  0x00, 0x00, 0x02, 0x00, 0x01, 0xe2, 0x21, 0xbc, 0x33, 0x00, 0x00, 0x00,
  0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);

console.log("=== JS Module Smoke Test ===\n");

// ---------------------------------------------------------------------------
// Catalog queries
// ---------------------------------------------------------------------------
console.log("Catalog queries:");

test("getAllPlatforms returns 7 platforms", () => {
  const platforms = getAllPlatforms();
  assert(Array.isArray(platforms), "should be an array");
  assert(platforms.length === 7, `expected 7, got ${platforms.length}`);
  assert(platforms.includes("Windows"), "should include Windows");
  assert(platforms.includes("PWA"), "should include PWA");
});

test("getRequiredSizes for Windows", () => {
  const sizes = getRequiredSizes(["Windows"]);
  assert(Array.isArray(sizes), "should be an array");
  assert(sizes.includes(16), "should include 16");
  assert(sizes.includes(256), "should include 256");
});

test("getRequiredSizes for multiple platforms", () => {
  const sizes = getRequiredSizes(["Windows", "MacOS"]);
  assert(sizes.length > 5, `expected >5 sizes, got ${sizes.length}`);
  // macOS requires 1024
  assert(sizes.includes(1024), "should include 1024 for macOS");
});

test("getCatalogJson for Web", () => {
  const catalog = getCatalogJson("Web");
  assert(catalog.platform === "Web", "platform should be Web");
  assert(catalog.containers.length > 0, "should have containers");
  assert(catalog.icons.length > 0, "should have icons");
  // Web has favicon.ico container
  assert(
    catalog.containers[0].filename === "favicon.ico",
    "first container should be favicon.ico"
  );
});

// ---------------------------------------------------------------------------
// Single-image encoding
// ---------------------------------------------------------------------------
console.log("\nSingle-image encoding:");

test("encodeIcoSingle produces ICO header", () => {
  const ico = encodeIcoSingle(1, 1, TINY_PNG);
  assert(ico instanceof Uint8Array, "should return Uint8Array");
  assert(ico.length > 6, `ICO too small: ${ico.length} bytes`);
  // ICO header: reserved=0, type=1 (little-endian)
  assert(ico[0] === 0 && ico[1] === 0, "reserved should be 0");
  assert(ico[2] === 1 && ico[3] === 0, "type should be 1 (ICO)");
});

test("encodeIcnsSingle produces ICNS header", () => {
  const icns = encodeIcnsSingle(16, 16, TINY_PNG);
  assert(icns instanceof Uint8Array, "should return Uint8Array");
  assert(icns.length > 8, `ICNS too small: ${icns.length} bytes`);
  // ICNS magic: 'icns' (big-endian)
  const magic = String.fromCharCode(icns[0], icns[1], icns[2], icns[3]);
  assert(magic === "icns", `expected 'icns' magic, got '${magic}'`);
});

// ---------------------------------------------------------------------------
// Session API
// ---------------------------------------------------------------------------
console.log("\nSession API:");

test("createIconSession and encode ICO", () => {
  const session = createIconSession();
  session.addImage(16, TINY_PNG);
  session.addImage(32, TINY_PNG);
  const ico = session.encodeIco([16, 32]);
  assert(ico instanceof Uint8Array, "should return Uint8Array");
  assert(ico.length > 6, "ICO should have content");
  // Check image count: byte 4-5 (little-endian) should be 2
  assert(ico[4] === 2 && ico[5] === 0, `expected 2 images, got ${ico[4]}`);
  session.destroy();
});

test("createIconSession and encode ICNS", () => {
  const session = createIconSession();
  session.addImage(16, TINY_PNG);
  session.addImage(32, TINY_PNG);
  const icns = session.encodeIcns([16, 32]);
  assert(icns instanceof Uint8Array, "should return Uint8Array");
  const magic = String.fromCharCode(
    icns[0],
    icns[1],
    icns[2],
    icns[3]
  );
  assert(magic === "icns", "should start with 'icns' magic");
  session.destroy();
});

// ---------------------------------------------------------------------------
// Manifest validation
// ---------------------------------------------------------------------------
console.log("\nManifest validation:");

test("validateManifest with valid manifest", () => {
  const manifest = JSON.stringify({
    name: "TestApp",
    outputs: [{ format: "ico", sizes: [16, 32] }],
  });
  const name = validateManifest(manifest);
  assert(name === "TestApp", `expected 'TestApp', got '${name}'`);
});

test("validateManifest rejects invalid manifest", () => {
  try {
    validateManifest("not json");
    assert(false, "should have thrown");
  } catch (e) {
    // Expected error
  }
});

// ---------------------------------------------------------------------------
// Supporting file generators
// ---------------------------------------------------------------------------
console.log("\nFile generators:");

test("generateWebmanifest produces valid JSON", () => {
  const manifest = generateWebmanifest("MyApp", "/icons");
  const parsed = JSON.parse(manifest);
  assert(parsed.name === "MyApp", "name should be MyApp");
  assert(Array.isArray(parsed.icons), "should have icons array");
  assert(parsed.icons.length > 0, "should have at least one icon");
});

test("generateAdaptiveXml produces XML", () => {
  const xml = generateAdaptiveXml(true, false);
  assert(xml.includes("<adaptive-icon"), "should contain <adaptive-icon");
  assert(
    xml.includes("ic_launcher_foreground"),
    "should reference foreground"
  );
});

test("generateAdaptiveXml with monochrome", () => {
  const xml = generateAdaptiveXml(false, true);
  assert(
    xml.includes("ic_launcher_monochrome"),
    "should reference monochrome"
  );
});

test("generateBgColorXml produces XML", () => {
  const xml = generateBgColorXml("#FF0000");
  assert(xml.includes("<resources"), "should contain <resources");
  assert(xml.includes("#FF0000"), "should contain the color");
});

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log(`\nResults: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
}

console.log("JS module smoke test passed");
