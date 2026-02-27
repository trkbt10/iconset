/**
 * @trkbt10/iconset-wasm
 *
 * Icon set generator for all platforms, compiled from MoonBit to WebAssembly.
 */

// ---------------------------------------------------------------------------
// Catalog types
// ---------------------------------------------------------------------------

export interface IconEntry {
  pixel_size: number;
  filename: string;
  directory: string;
}

export interface ContainerSpec {
  format: string;
  filename: string;
  directory: string;
  sizes: number[];
}

export interface PlatformCatalog {
  platform: string;
  description: string;
  containers: ContainerSpec[];
  icons: IconEntry[];
}

export interface IconSession {
  addImage(size: number, pngData: Uint8Array): void;
  encodeIco(sizes: number[]): Uint8Array;
  encodeIcns(sizes: number[]): Uint8Array;
  destroy(): void;
}

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

/** Initialize the WASM module (Node.js). Must be called before other functions. */
export function init(): Promise<void>;

/** Initialize the WASM module (browser). */
export function initBrowser(wasmUrl: string | URL): Promise<void>;

// ---------------------------------------------------------------------------
// Single-image encoding
// ---------------------------------------------------------------------------

/** Encode a single PNG image into ICO format. */
export function encodeIcoSingle(
  width: number,
  height: number,
  pngData: Uint8Array
): Uint8Array;

/** Encode a single PNG image into ICNS format. */
export function encodeIcnsSingle(
  width: number,
  height: number,
  pngData: Uint8Array
): Uint8Array;

/** Validate a manifest JSON string. Returns the manifest name. */
export function validateManifest(jsonStr: string): string;

// ---------------------------------------------------------------------------
// Session API
// ---------------------------------------------------------------------------

/** Create an icon session for building multi-image containers (ICO/ICNS). */
export function createIconSession(): IconSession;

// ---------------------------------------------------------------------------
// Catalog queries
// ---------------------------------------------------------------------------

/** Get all supported platform names. */
export function getAllPlatforms(): string[];

/** Get required pixel sizes for given platforms. */
export function getRequiredSizes(platforms: string[]): number[];

/** Get the full catalog specification for a platform. */
export function getCatalogJson(platform: string): PlatformCatalog;

// ---------------------------------------------------------------------------
// Supporting file generators
// ---------------------------------------------------------------------------

/** Generate a PWA web manifest JSON string. */
export function generateWebmanifest(name: string, iconDir: string): string;

/** Generate Android adaptive icon XML. */
export function generateAdaptiveXml(
  bgIsColor: boolean,
  hasMonochrome: boolean
): string;

/** Generate Android background color XML. */
export function generateBgColorXml(color: string): string;
