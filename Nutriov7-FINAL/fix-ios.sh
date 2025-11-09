#!/bin/bash

# Quick fix script for iOS simulator issues

echo "🔧 Nutrio v7 - iOS Quick Fix"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "This script fixes common iOS simulator issues"
echo ""

# Check if ios directory exists
if [ ! -d "ios" ]; then
    echo "❌ iOS project not initialized yet!"
    echo ""
    echo "Run this first:"
    echo "  ./setup-ios.sh"
    echo ""
    exit 1
fi

echo "1️⃣  Cleaning old build..."
rm -rf dist/
echo "   ✅ Cleaned"
echo ""

echo "2️⃣  Building fresh web assets..."
npm run build
if [ $? -ne 0 ]; then
    echo "   ❌ Build failed"
    exit 1
fi
echo "   ✅ Built"
echo ""

echo "3️⃣  Installing iOS dependencies..."
cd ios/App
pod install
cd ../..
echo "   ✅ Pods installed"
echo ""

echo "4️⃣  Syncing to iOS..."
npx cap sync ios
echo "   ✅ Synced"
echo ""

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                                                                  ║"
echo "║                      ✅ FIX COMPLETE! ✅                         ║"
echo "║                                                                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo "🎯 Next steps:"
echo ""
echo "   1. Open Xcode:"
echo "      npx cap open ios"
echo ""
echo "   2. In Xcode:"
echo "      • Product → Clean Build Folder (⌘ + Shift + K)"
echo "      • Select a simulator (iPhone 15 Pro)"
echo "      • Click Run ▶️"
echo ""
echo "💡 Still having issues?"
echo ""
echo "   Try this:"
echo "   1. Quit Xcode completely"
echo "   2. Run: xcrun simctl erase all"
echo "   3. Run: ./fix-ios.sh again"
echo "   4. Reopen Xcode"
echo ""
