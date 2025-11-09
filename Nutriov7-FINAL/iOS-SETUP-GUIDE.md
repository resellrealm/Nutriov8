# iOS Permissions Configuration

After running `./setup-ios.sh` or `npx cap add ios`, you'll need to configure permissions in Xcode.

## Required Permissions for Nutrio v7

The app needs these permissions for full functionality:

### Camera Access (for meal photo analysis)
```xml
<key>NSCameraUsageDescription</key>
<string>Nutrio needs camera access to analyze your meals and track nutrition.</string>
```

### Photo Library (for selecting meal photos)
```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>Nutrio needs access to your photo library to select meal images.</string>
```

### Location (optional - for local food recommendations)
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>Nutrio uses your location to recommend nearby restaurants and stores.</string>
```

## How to Add Permissions

1. Open the iOS project in Xcode:
   ```bash
   npx cap open ios
   ```

2. In Xcode, select your app target (Nutrio)

3. Go to the "Info" tab

4. Add custom iOS target properties for each permission above

5. Rebuild and run

## Xcode Simulator Configuration

### Recommended Simulator
- **iPhone 15 Pro** (iOS 17.0+)
- **iPhone 14** (iOS 16.0+)
- Any device with iOS 15.0 or higher

### Build Settings
Make sure these are set in Xcode:

1. **Deployment Target**: iOS 13.0 minimum
2. **Swift Version**: 5.0 or later
3. **Architectures**: arm64 (for real device), x86_64 (for simulator)

### Common Issues & Solutions

#### Issue: App launches but shows blank screen
**Solution:**
```bash
# Clean build
npm run build
npx cap sync ios
# Then rebuild in Xcode
```

#### Issue: Module not found errors
**Solution:**
```bash
cd ios/App
pod install
cd ../..
npx cap sync ios
```

#### Issue: Simulator not appearing in Xcode
**Solution:**
1. Open Xcode → Window → Devices and Simulators
2. Click the + button to add simulators
3. Download iOS runtime if needed

#### Issue: Build fails with Swift errors
**Solution:**
1. In Xcode: Product → Clean Build Folder (⌘ + Shift + K)
2. Close Xcode
3. Run: `npx cap sync ios`
4. Reopen Xcode and build

### Testing Checklist

- [ ] App launches on simulator
- [ ] Sign up flow works
- [ ] Navigation works (sidebar, header)
- [ ] All 6 onboarding steps load
- [ ] Can complete onboarding
- [ ] Dashboard loads after onboarding
- [ ] No console errors in Xcode

### Performance Tips

1. **Use Release Build for Testing:**
   - In Xcode: Product → Scheme → Edit Scheme
   - Set Build Configuration to "Release"

2. **Enable Hardware Keyboard:**
   - In Simulator: I/O → Keyboard → Connect Hardware Keyboard

3. **Clear Simulator Data:**
   ```bash
   xcrun simctl erase all
   ```

## File Structure After iOS Setup

```
Nutriov7-Complete/
├── ios/                          ← Generated iOS project
│   ├── App/
│   │   ├── App/
│   │   │   ├── AppDelegate.swift
│   │   │   ├── Info.plist       ← Add permissions here
│   │   │   └── capacitor.config.json
│   │   ├── App.xcodeproj
│   │   └── Podfile
│   └── App.xcworkspace          ← Open this in Xcode
├── src/
├── dist/                         ← Built web assets
├── capacitor.config.ts           ← Capacitor configuration
└── package.json
```

## Quick Commands Reference

```bash
# Initial setup
./setup-ios.sh

# Build web assets
npm run build

# Sync to iOS
npx cap sync ios

# Open in Xcode
npx cap open ios

# All in one (from package.json)
npm run ios

# Clean iOS build
cd ios/App
pod install
cd ../..
npx cap sync ios
```

## Important Notes

1. **First time setup takes longer** - Xcode needs to download simulators and dependencies

2. **Always build web assets first** - Run `npm run build` before `npx cap sync ios`

3. **Hot reload doesn't work** - You need to rebuild after code changes:
   ```bash
   npm run build && npx cap sync ios
   ```

4. **For live development** - Use web browser (`npm run dev`) instead of simulator

5. **Simulator vs Real Device:**
   - Simulator: Good for UI testing, no camera/sensors
   - Real Device: Full functionality, requires Apple Developer account

## Need Help?

1. Check Xcode console for errors
2. Run `npx cap doctor` to diagnose issues
3. See Capacitor docs: https://capacitorjs.com/docs/ios

---

**Ready to test on iOS! Run `./setup-ios.sh` to get started!** 🍎
