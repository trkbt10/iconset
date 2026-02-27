#!/bin/bash
set -euo pipefail

echo "Building JS module..."
moon build --target js cmd/wasm

mkdir -p npm
cp _build/js/debug/build/cmd/wasm/wasm.js npm/iconset.js
cp _build/js/debug/build/cmd/wasm/wasm.js.map npm/iconset.js.map
cp _build/js/debug/build/cmd/wasm/wasm.d.ts npm/iconset.gen.d.ts
cp _build/js/debug/build/cmd/wasm/moonbit.d.ts npm/moonbit.d.ts

SIZE=$(wc -c < npm/iconset.js | tr -d ' ')
echo "Built npm/iconset.js (${SIZE} bytes)"
