#!/bin/bash

# Nutrio v7 - iOS Setup Script
# This script initializes the iOS project for Xcode simulator

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                                                                  ║"
echo "║              🍎 Nutrio v7 - iOS Setup 🍎                        ║"
echo "║                                                                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies first..."
    npm install
    echo ""
fi

# Check if Capacitor CLI is available
if ! command -v npx &> /dev/null; then
    echo "❌ npx not found. Please install Node.js"
    exit 1
fi

echo "🔧 Step 1: Building web assets..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check for errors above."
    exit 1
fi

echo ""
echo "✅ Build complete!"
echo ""

# Initialize Capacitor if needed
if [ ! -d "ios" ]; then
    echo "🔧 Step 2: Initializing Capacitor iOS project..."
    npx cap add ios
    echo ""
else
    echo "✅ iOS project already exists"
    echo ""
fi

# Sync web assets to iOS
echo "🔧 Step 3: Syncing assets to iOS..."
npx cap sync ios

if [ $? -ne 0 ]; then
    echo "❌ Sync failed. Please check for errors above."
    exit 1
fi

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                                                                  ║"
echo "║                  ✅ iOS SETUP COMPLETE! ✅                      ║"
echo "║                                                                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo "🎯 Next Steps:"
echo ""
echo "   Option 1: Open in Xcode (Recommended)"
echo "   ────────────────────────────────────────────────────────────"
echo "   npx cap open ios"
echo ""
echo "   Then in Xcode:"
echo "   1. Select a simulator (e.g., iPhone 15 Pro)"
echo "   2. Click the ▶️ Run button"
echo "   3. Wait for app to build and launch"
echo ""
echo "   Option 2: Quick command"
echo "   ────────────────────────────────────────────────────────────"
echo "   npm run ios"
echo ""
echo "📱 Simulator Tips:"
echo "   • Use ⌘ + K to toggle keyboard"
echo "   • Use ⌘ + D for device home button"
echo "   • Use ⌘ + Shift + H to go home"
echo ""
echo "🐛 Troubleshooting:"
echo "   If simulator shows blank screen:"
echo "   1. Stop the simulator"
echo "   2. Run: npm run build"
echo "   3. Run: npx cap sync ios"
echo "   4. Try again"
echo ""
echo "═══════════════════════════════════════════════════════════════════"
echo ""
echo "             Ready to test on iOS Simulator! 🎊"
echo ""
