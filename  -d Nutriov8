# Testing Guide: Nutrio v7 Phase 2 Onboarding

## 🧪 Comprehensive Testing Checklist

---

## 1️⃣ Step 1: Diary Style Testing

### Happy Path
- [ ] Click "Simple" option
- [ ] Visual feedback: border changes to emerald, checkmark appears
- [ ] Next button becomes enabled
- [ ] Progress bar shows step complete
- [ ] Can click Next to advance

### Edge Cases
- [ ] Can switch between Simple and Detailed multiple times
- [ ] Selection persists on browser refresh
- [ ] Keyboard navigation (Tab, Enter) works
- [ ] Touch works on mobile

### Accessibility
- [ ] Screen reader announces selection
- [ ] ARIA labels present
- [ ] Focus visible on keyboard navigation
- [ ] Color contrast sufficient

---

## 2️⃣ Step 2: Goals Testing

### Happy Path
- [ ] Select weight goal (lose/maintain/gain)
- [ ] Select pace (if not maintaining)
- [ ] Enter target date
- [ ] Next button enables
- [ ] Can advance to Step 3

### Validation Testing
- [ ] Cannot proceed without selecting goal
- [ ] Cannot proceed without selecting pace (for lose/gain)
- [ ] Cannot proceed without target date
- [ ] Date picker only allows future dates
- [ ] Error messages display correctly

### Edge Cases
- [ ] Selecting "Maintain" hides pace selector
- [ ] Target weight field is optional
- [ ] Recommended date calculation works correctly
- [ ] Can enter dates far in the future (e.g., 2030)
- [ ] Back button returns to Step 1 with data preserved

### Data Validation
- [ ] Target weight accepts decimals (e.g., 5.5 kg)
- [ ] Target weight has reasonable min/max
- [ ] Date format is ISO 8601

---

## 3️⃣ Step 3: Body Metrics Testing

### Happy Path
- [ ] Enter current weight (e.g., 70 kg)
- [ ] Enter height (e.g., 175 cm)
- [ ] Select sex
- [ ] Enter age (e.g., 28)
- [ ] BMI calculates automatically
- [ ] BMI category displays correctly
- [ ] Next button enables
- [ ] Can advance to Step 4

### Unit Conversion Testing
- [ ] Switch from kg to lbs
- [ ] Weight converts correctly (70kg → 154.32lbs)
- [ ] Switch from cm to ft
- [ ] Height converts correctly (175cm → 5.74ft)
- [ ] Conversions preserve precision
- [ ] Can switch units multiple times

### Validation Testing
- [ ] Cannot proceed with weight = 0
- [ ] Cannot proceed with height = 0
- [ ] Cannot proceed without selecting sex
- [ ] Age < 13 shows error message
- [ ] Age > 120 shows error message
- [ ] Valid age range (13-120) works

### BMI Testing
- [ ] BMI = 17 shows "Underweight" (blue)
- [ ] BMI = 22 shows "Normal" (emerald)
- [ ] BMI = 27 shows "Overweight" (amber)
- [ ] BMI = 32 shows "Obese" (rose)
- [ ] BMI updates when weight/height changes
- [ ] BMI updates when units change

### Edge Cases
- [ ] Very tall heights (e.g., 220 cm / 7.2 ft)
- [ ] Very short heights (e.g., 140 cm / 4.6 ft)
- [ ] Very high weights (e.g., 200 kg / 440 lbs)
- [ ] Very low weights (e.g., 40 kg / 88 lbs)
- [ ] Decimal inputs (e.g., 70.5 kg, 175.3 cm)

---

## 4️⃣ Step 4: Dietary Preferences Testing

### Happy Path
- [ ] Select at least one cuisine
- [ ] Add favorite foods
- [ ] Add allergies (optional)
- [ ] Select diet pattern
- [ ] Next button enables
- [ ] Can advance to Step 5

### Cuisine Selection
- [ ] Can select multiple cuisines
- [ ] Visual feedback on selection
- [ ] Can deselect cuisines
- [ ] At least 1 cuisine required for validation
- [ ] All 12 cuisines selectable

### Favorite Foods
- [ ] Can add custom food via input
- [ ] Food appears as tag
- [ ] Can remove food via X button
- [ ] Enter key adds food
- [ ] Plus button adds food
- [ ] Empty input doesn't add food
- [ ] Duplicate foods handled

### Allergies Testing
- [ ] Quick select common allergies
- [ ] Visual feedback (red tags)
- [ ] Can deselect allergies
- [ ] Can add custom allergies
- [ ] Custom allergies appear as tags
- [ ] Can remove allergies via X button
- [ ] Allergy tags visually distinct from favorites

### Diet Pattern
- [ ] All 6 patterns selectable
- [ ] Radio button behavior (only one selected)
- [ ] Visual feedback on selection
- [ ] Pattern required for validation

### Validation Testing
- [ ] Cannot proceed without cuisine selection
- [ ] Cannot proceed without diet pattern
- [ ] Can proceed with 0 favorite foods (optional)
- [ ] Can proceed with 0 allergies (optional)

### Edge Cases
- [ ] Add 20+ favorite foods
- [ ] Add 20+ allergies
- [ ] Very long food names (50+ chars)
- [ ] Special characters in food names
- [ ] Emojis in food names

---

## 5️⃣ Step 5: Activity Level Testing

### Happy Path
- [ ] Select activity level
- [ ] Visual feedback on selection
- [ ] Multiplier displays correctly
- [ ] Next button enables
- [ ] Can advance to Step 6

### All Activity Levels
- [ ] Sedentary (×1.2)
- [ ] Lightly Active (×1.375)
- [ ] Moderately Active (×1.55) - Recommended
- [ ] Very Active (×1.725)
- [ ] Extra Active (×1.9)

### Validation
- [ ] Must select one level
- [ ] Cannot proceed without selection

### Visual Testing
- [ ] Correct icon for each level
- [ ] Correct color coding
- [ ] "Most Common" badge on Moderate
- [ ] Descriptions readable
- [ ] Examples helpful

### Edge Cases
- [ ] Can change selection multiple times
- [ ] Selection persists on back/forward navigation
- [ ] Hover effects work
- [ ] Mobile touch works

---

## 6️⃣ Step 6: Time Constraints Testing

### Happy Path
- [ ] Select max cook time
- [ ] Select meals per day
- [ ] Select budget
- [ ] Select cooking skill
- [ ] Summary panel updates live
- [ ] Complete button enables
- [ ] Clicking Complete → Dashboard

### Max Cook Time
- [ ] 15 min option
- [ ] 30 min option (recommended)
- [ ] 45 min option
- [ ] 60+ min option
- [ ] Visual feedback on selection

### Meals Per Day
- [ ] Dropdown shows 2-6 options
- [ ] 3 meals marked as recommended
- [ ] Can select any value 2-6
- [ ] Required for validation

### Budget Testing
- [ ] Budget-Friendly option
- [ ] Moderate option (recommended)
- [ ] Premium option
- [ ] Per-meal price displays
- [ ] Visual feedback on selection

### Cooking Skill
- [ ] Beginner option
- [ ] Intermediate option (recommended)
- [ ] Advanced option
- [ ] Visual feedback on selection

### Summary Panel
- [ ] Shows cook time when selected
- [ ] Shows meals per day when selected
- [ ] Shows budget when selected
- [ ] Shows skill when selected
- [ ] Updates in real-time
- [ ] Correct capitalization

### Validation
- [ ] Cannot complete without cook time
- [ ] Cannot complete without meals per day
- [ ] Cannot complete without budget
- [ ] Cannot complete without skill
- [ ] Error message displays if incomplete

---

## 🔄 Navigation Testing

### Forward Navigation
- [ ] Next button disabled when step invalid
- [ ] Next button enabled when step valid
- [ ] Arrow Right key advances (when valid)
- [ ] Progress bar updates on advance
- [ ] Step indicators update
- [ ] Smooth animation between steps

### Backward Navigation
- [ ] Back button always enabled (except Step 1)
- [ ] Back button disabled on Step 1
- [ ] Arrow Left key goes back
- [ ] Data preserved when going back
- [ ] Progress bar updates correctly
- [ ] Step indicators update correctly

### Direct Navigation
- [ ] Cannot skip steps via URL manipulation
- [ ] Cannot access Step 3 without completing 1-2
- [ ] Redirects to correct step if URL hacked

---

## 💾 Save & Resume Testing

### Autosave
- [ ] Autosaves every 30 seconds
- [ ] localStorage updated automatically
- [ ] No user action required

### Manual Save
- [ ] Save button visible
- [ ] Save button updates timestamp
- [ ] Timestamp displays correctly
- [ ] Manual save triggers localStorage update

### Resume Testing
- [ ] Complete Step 1, close browser
- [ ] Reopen → Should be on Step 2
- [ ] All Step 1 data preserved
- [ ] Complete Step 3, refresh page
- [ ] Should be on Step 4
- [ ] All previous data preserved
- [ ] Close mid-step (e.g., halfway through Step 4)
- [ ] Reopen → Should resume at Step 4
- [ ] Partial data preserved

### localStorage Verification
- [ ] Check DevTools → Application → localStorage
- [ ] `onboarding_progress` key exists
- [ ] Data structure matches Redux state
- [ ] Contains all completed step data
- [ ] `lastSaved` timestamp is ISO 8601

---

## ⌨️ Keyboard Navigation Testing

### Arrow Keys
- [ ] Right arrow advances (when valid)
- [ ] Right arrow disabled when invalid
- [ ] Left arrow goes back
- [ ] Left arrow disabled on Step 1
- [ ] Arrow keys work on all steps

### Tab Navigation
- [ ] Tab cycles through interactive elements
- [ ] Tab order is logical
- [ ] Shift+Tab goes backward
- [ ] Focus visible on all elements

### Enter Key
- [ ] Enter submits text inputs
- [ ] Enter adds favorite foods
- [ ] Enter adds allergies
- [ ] Enter triggers button clicks

### Escape Key
- [ ] (Optional) ESC clears input fields
- [ ] ESC doesn't break navigation

---

## 📱 Responsive Design Testing

### Mobile (375px width)
- [ ] All steps display correctly
- [ ] No horizontal scroll
- [ ] Touch targets ≥44px
- [ ] Navigation footer sticky
- [ ] Progress bar visible
- [ ] Text readable
- [ ] Forms usable

### Tablet (768px width)
- [ ] Grid layouts adjust
- [ ] All content visible
- [ ] No overflow issues
- [ ] Touch-friendly

### Desktop (1920px width)
- [ ] Max width container
- [ ] Content centered
- [ ] No excessive white space
- [ ] Hover effects work

### Landscape Mobile
- [ ] Content doesn't overflow
- [ ] Navigation accessible
- [ ] Scrollable if needed

---

## ♿ Accessibility Testing

### Screen Reader
- [ ] All steps announced
- [ ] Button states announced
- [ ] Form labels read correctly
- [ ] Error messages read
- [ ] Progress announced

### Keyboard Only
- [ ] Can complete entire flow with keyboard
- [ ] No keyboard traps
- [ ] Focus order logical
- [ ] Skip links work (if present)

### Color Contrast
- [ ] Text meets WCAG AA (4.5:1)
- [ ] Large text meets WCAG AA (3:1)
- [ ] Error text readable
- [ ] Buttons have sufficient contrast

### Reduced Motion
- [ ] Animations disabled with prefers-reduced-motion
- [ ] Functionality preserved
- [ ] No motion sickness triggers

---

## 🐛 Edge Cases & Error Scenarios

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### localStorage Issues
- [ ] What if localStorage is full?
- [ ] What if localStorage is disabled?
- [ ] What if localStorage is cleared mid-session?
- [ ] Graceful fallback behavior

### Network Issues
- [ ] Works offline (no API calls during onboarding)
- [ ] (Future) Handle API errors gracefully

### Data Limits
- [ ] Very long names (100+ chars)
- [ ] 50+ favorite foods
- [ ] 50+ allergies
- [ ] Special characters everywhere
- [ ] Unicode characters (emoji, Chinese, Arabic)

### Race Conditions
- [ ] Rapidly clicking Next button
- [ ] Changing step mid-animation
- [ ] Autosave during manual save

---

## 🔐 Security Testing

### Input Validation
- [ ] XSS attempts in text inputs
- [ ] SQL injection attempts
- [ ] Script tags in inputs
- [ ] HTML injection attempts

### localStorage
- [ ] Data encrypted? (currently plaintext - note for future)
- [ ] No sensitive data stored
- [ ] localStorage scoped correctly

---

## 📊 Performance Testing

### Load Time
- [ ] Initial render < 1 second
- [ ] Step transitions < 200ms
- [ ] Smooth 60fps animations
- [ ] No layout shifts

### Memory
- [ ] No memory leaks
- [ ] Redux state reasonable size
- [ ] localStorage size < 5MB

### Bundle Size
- [ ] Check bundle size with `npm run build`
- [ ] Ensure < 500KB gzipped
- [ ] Code splitting effective

---

## ✅ Final Acceptance Criteria

### Must Pass
- [ ] All 6 steps functional
- [ ] Validation works correctly
- [ ] Save/resume works
- [ ] Mobile responsive
- [ ] Accessibility compliant
- [ ] No console errors
- [ ] No console warnings

### Should Pass
- [ ] Smooth animations
- [ ] Fast load times
- [ ] Good performance
- [ ] Clear error messages
- [ ] Intuitive UX

### Nice to Have
- [ ] Offline support
- [ ] PWA features
- [ ] Animations can be disabled
- [ ] Dark mode support

---

## 🎯 Test Scenarios

### Scenario 1: First-Time User
```
1. Sign up
2. Redirected to onboarding
3. Complete all 6 steps
4. Reach dashboard
✅ Expected: Smooth flow, no errors
```

### Scenario 2: Interrupted User
```
1. Start onboarding
2. Complete Step 1-3
3. Close browser
4. Return later
5. Resume from Step 4
6. Complete remaining steps
✅ Expected: All data preserved
```

### Scenario 3: Indecisive User
```
1. Complete Step 1
2. Go back and change selection
3. Go forward
4. Complete Step 2
5. Go back to Step 1 again
6. Change selection again
7. Complete all steps
✅ Expected: Latest selections saved
```

### Scenario 4: Validator Tester
```
1. Try to proceed without completing Step 1
2. Try to proceed with invalid age (e.g., 10)
3. Try to proceed without selecting cuisines
4. Check all error messages appear
✅ Expected: Clear validation, helpful errors
```

### Scenario 5: Power User
```
1. Use only keyboard to complete onboarding
2. Arrow keys for navigation
3. Tab for field navigation
4. Enter to submit
✅ Expected: Fully keyboard accessible
```

---

## 📝 Bug Report Template

When you find a bug, document it:

```markdown
**Bug Title**: [Brief description]

**Steps to Reproduce**:
1. 
2. 
3. 

**Expected Result**:
[What should happen]

**Actual Result**:
[What actually happened]

**Environment**:
- Browser: 
- OS: 
- Screen size: 
- Device: 

**Screenshots/Video**:
[Attach if possible]

**Console Errors**:
[Copy/paste any errors]

**Severity**: Critical / High / Medium / Low
```

---

## 🎉 Testing Complete!

Once all tests pass, your onboarding is production-ready! 🚀

**Next**: Deploy to staging, then production!
