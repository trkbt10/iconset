#!/bin/bash
set -euo pipefail

echo "Building native CLI..."
moon build --target native cmd/generate

echo "CLI built successfully"
