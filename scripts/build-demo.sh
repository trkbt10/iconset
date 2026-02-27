#!/bin/bash
set -euo pipefail

echo "Building JS module..."
moon build --target js cmd/wasm

mkdir -p docs
cp _build/js/debug/build/cmd/wasm/wasm.js docs/iconset.js

SIZE=$(wc -c < docs/iconset.js | tr -d ' ')
echo "Built docs/iconset.js (${SIZE} bytes)"
echo "Demo ready — serve docs/ with an HTTP server for ESM support."
