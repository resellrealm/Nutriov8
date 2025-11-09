#!/bin/bash

# Nutrio v7 Complete - Setup Script

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                                                                  ║"
echo "║              🥗 Nutrio v7 - Complete Setup 🥗                   ║"
echo "║                                                                  ║"
echo "║         Phase 1: Core App + Phase 2: Onboarding                 ║"
echo "║                                                                  ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "   This may take a few minutes..."
echo ""
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════════════╗"
    echo "║                                                                  ║"
    echo "║                  ✅ SETUP COMPLETE! ✅                          ║"
    echo "║                                                                  ║"
    echo "╚══════════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📚 What's Included:"
    echo "   ✅ Authentication (Sign Up/Sign In)"
    echo "   ✅ Complete 6-Step Onboarding"
    echo "   ✅ Dashboard with Layout"
    echo "   ✅ Mobile Responsive"
    echo "   ✅ Save & Resume Functionality"
    echo ""
    echo "🚀 Quick Start:"
    echo "   1. Run: npm run dev"
    echo "   2. Open: http://localhost:3000"
    echo "   3. Sign up and test the complete flow!"
    echo ""
    echo "📖 Documentation:"
    echo "   • README.md              - Complete guide"
    echo "   • README_ONBOARDING.md   - Onboarding details"
    echo "   • TESTING_GUIDE.md       - Test scenarios"
    echo ""
    echo "🎯 Next Steps:"
    echo "   • Test sign up flow"
    echo "   • Complete all 6 onboarding steps"
    echo "   • Reach the dashboard"
    echo ""
    echo "🔥 Commands:"
    echo "   npm run dev       - Start development"
    echo "   npm run build     - Build for production"
    echo "   npm run preview   - Preview production build"
    echo "   npm run ios       - Build for iOS (requires Xcode)"
    echo ""
    echo "═══════════════════════════════════════════════════════════════════"
    echo ""
    echo "             Ready to build something amazing! 🎊"
    echo ""
else
    echo ""
    echo "❌ Installation failed!"
    echo "Please check the error messages above and try again."
    echo ""
    echo "Common solutions:"
    echo "   • Delete node_modules and package-lock.json"
    echo "   • Run: npm cache clean --force"
    echo "   • Try again: npm install"
    exit 1
fi
