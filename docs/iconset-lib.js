/**
 * Browser ESM wrapper for the compiled MoonBit iconset module.
 *
 * Re-exports with a clean API — unwraps MoonBit Result types into exceptions.
 */

import * as raw from "./iconset.js";

function unwrap(result) {
  if (result && typeof result === "object" && "$tag" in result) {
    if (result.$tag === 1) return result._0;
    throw new Error(String(result._0));
  }
  return result;
}

// ---------------------------------------------------------------------------
// Single-image encoding
// ---------------------------------------------------------------------------

export function encodeIcoSingle(width, height, pngData) {
  return unwrap(raw.encodeIcoSingle(width, height, pngData));
}

export function encodeIcnsSingle(width, height, pngData) {
  return unwrap(raw.encodeIcnsSingle(width, height, pngData));
}

// ---------------------------------------------------------------------------
// Session API for multi-image containers
// ---------------------------------------------------------------------------

export function createIconSession() {
  const id = raw.createSession();
  return {
    addImage(size, pngData) {
      raw.sessionAddImage(id, size, pngData);
    },
    encodeIco(sizes) {
      return unwrap(raw.sessionEncodeIco(id, JSON.stringify(sizes)));
    },
    encodeIcns(sizes) {
      return unwrap(raw.sessionEncodeIcns(id, JSON.stringify(sizes)));
    },
    destroy() {
      raw.destroySession(id);
    },
  };
}

// ---------------------------------------------------------------------------
// Catalog queries
// ---------------------------------------------------------------------------

export function getAllPlatforms() {
  return JSON.parse(raw.getAllPlatforms());
}

export function getRequiredSizes(platforms) {
  return JSON.parse(unwrap(raw.getRequiredSizes(JSON.stringify(platforms))));
}

export function getCatalogJson(platform) {
  return JSON.parse(unwrap(raw.getCatalogJson(platform)));
}

// ---------------------------------------------------------------------------
// Supporting file generators
// ---------------------------------------------------------------------------

export function generateWebmanifest(name, iconDir) {
  return raw.generateWebmanifest(name, iconDir);
}

export function generateAdaptiveXml(bgIsColor, hasMonochrome) {
  return raw.generateAdaptiveXml(bgIsColor, hasMonochrome);
}

export function generateBgColorXml(color) {
  return raw.generateBgColorXml(color);
}
