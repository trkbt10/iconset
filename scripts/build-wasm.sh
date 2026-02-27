#!/bin/bash
set -euo pipefail

echo "Building WASM module..."
moon build --target wasm-gc cmd/wasm

mkdir -p npm
cp _build/wasm-gc/debug/build/cmd/wasm/wasm.wasm npm/iconset.wasm

SIZE=$(wc -c < npm/iconset.wasm | tr -d ' ')
echo "Built npm/iconset.wasm (${SIZE} bytes)"
