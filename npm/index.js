/**
 * @trkbt10/iconset-wasm
 *
 * Icon set generator for all platforms, compiled from MoonBit to JavaScript.
 * Supports ICO, ICNS, PNG generation for Windows, macOS, iOS, Android, Ubuntu, Web, and PWA.
 *
 * This module re-exports the compiled MoonBit functions with a friendly API.
 * Functions that can fail return MoonBit Result types ({ $tag: 1, _0: value } for Ok,
 * { $tag: 0, _0: error } for Err). The unwrap() helper converts these to exceptions.
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

/**
 * Encode a single PNG image into ICO format.
 * @param {number} width
 * @param {number} height
 * @param {Uint8Array} pngData
 * @returns {Uint8Array}
 */
export function encodeIcoSingle(width, height, pngData) {
  return unwrap(raw.encodeIcoSingle(width, height, pngData));
}

/**
 * Encode a single PNG image into ICNS format.
 * @param {number} width
 * @param {number} height
 * @param {Uint8Array} pngData
 * @returns {Uint8Array}
 */
export function encodeIcnsSingle(width, height, pngData) {
  return unwrap(raw.encodeIcnsSingle(width, height, pngData));
}

/**
 * Validate a manifest JSON string.
 * @param {string} jsonStr
 * @returns {string} The manifest name
 */
export function validateManifest(jsonStr) {
  return unwrap(raw.validateManifest(jsonStr));
}

// ---------------------------------------------------------------------------
// Session API for multi-image containers
// ---------------------------------------------------------------------------

/**
 * Create an icon session for building multi-image containers (ICO/ICNS).
 * Add images one at a time, then encode them together.
 * @returns {{ addImage, encodeIco, encodeIcns, destroy }}
 */
export function createIconSession() {
  const id = raw.createSession();
  return {
    /**
     * Add a PNG image to the session.
     * @param {number} size - Pixel size (width = height)
     * @param {Uint8Array} pngData
     */
    addImage(size, pngData) {
      raw.sessionAddImage(id, size, pngData);
    },

    /**
     * Encode session images into ICO format.
     * @param {number[]} sizes - Which sizes to include
     * @returns {Uint8Array}
     */
    encodeIco(sizes) {
      return unwrap(raw.sessionEncodeIco(id, JSON.stringify(sizes)));
    },

    /**
     * Encode session images into ICNS format.
     * @param {number[]} sizes - Which sizes to include
     * @returns {Uint8Array}
     */
    encodeIcns(sizes) {
      return unwrap(raw.sessionEncodeIcns(id, JSON.stringify(sizes)));
    },

    /**
     * Destroy the session and free its images.
     */
    destroy() {
      raw.destroySession(id);
    },
  };
}

// ---------------------------------------------------------------------------
// Catalog queries
// ---------------------------------------------------------------------------

/**
 * Get all supported platform names.
 * @returns {string[]}
 */
export function getAllPlatforms() {
  return JSON.parse(raw.getAllPlatforms());
}

/**
 * Get required pixel sizes for given platforms.
 * @param {string[]} platforms
 * @returns {number[]}
 */
export function getRequiredSizes(platforms) {
  return JSON.parse(
    unwrap(raw.getRequiredSizes(JSON.stringify(platforms)))
  );
}

/**
 * Get the full catalog specification for a platform.
 * @param {string} platform
 * @returns {object}
 */
export function getCatalogJson(platform) {
  return JSON.parse(unwrap(raw.getCatalogJson(platform)));
}

// ---------------------------------------------------------------------------
// Supporting file generators
// ---------------------------------------------------------------------------

/**
 * Generate a PWA web manifest JSON string.
 * @param {string} name - App name
 * @param {string} iconDir - Icon directory path (e.g. "/icons")
 * @returns {string}
 */
export function generateWebmanifest(name, iconDir) {
  return raw.generateWebmanifest(name, iconDir);
}

/**
 * Generate Android adaptive icon XML.
 * @param {boolean} bgIsColor - Whether background is a solid color
 * @param {boolean} hasMonochrome - Whether monochrome layer exists
 * @returns {string}
 */
export function generateAdaptiveXml(bgIsColor, hasMonochrome) {
  return raw.generateAdaptiveXml(bgIsColor, hasMonochrome);
}

/**
 * Generate Android background color XML.
 * @param {string} color - Hex color (e.g. "#FFFFFF")
 * @returns {string}
 */
export function generateBgColorXml(color) {
  return raw.generateBgColorXml(color);
}
