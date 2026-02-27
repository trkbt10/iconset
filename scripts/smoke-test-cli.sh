#!/bin/bash
set -euo pipefail

echo "=== CLI Smoke Test ==="

# Clean previous output
rm -rf _output/

# Run the CLI (requires iconset.json + source PNG)
echo "Running: moon run --target native cmd/generate"
moon run --target native cmd/generate

# Verify key outputs exist and are non-empty
PASS=0
FAIL=0

check_file() {
  if [ -s "$1" ]; then
    echo "  OK: $1 ($(wc -c < "$1" | tr -d ' ') bytes)"
    PASS=$((PASS + 1))
  else
    echo "  FAIL: $1 (missing or empty)"
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "Checking outputs..."

check_file "_output/Windows/AppIcon.ico"
check_file "_output/MacOS/AppIcon.icns"
check_file "_output/Web/favicon.ico"
check_file "_output/PWA/site.webmanifest"
check_file "_output/Android/mipmap-anydpi-v26/ic_launcher.xml"
check_file "_output/Ubuntu/hicolor/256x256/apps/AppIcon.png"

echo ""
echo "Results: ${PASS} passed, ${FAIL} failed"

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi

echo "CLI smoke test passed"
