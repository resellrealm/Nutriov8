# Nutrio v7 - Phase 2: Complete Onboarding System

## 🎯 Overview

This is the **complete 6-step onboarding flow** for Nutrio v7 with:
- ✅ All 6 mandatory onboarding steps
- ✅ Per-step validation with helpful errors
- ✅ Progress tracking with visual indicators
- ✅ Save & Resume functionality (localStorage autosave)
- ✅ Keyboard navigation (Arrow keys)
- ✅ Full accessibility (ARIA labels)
- ✅ Smooth animations with Framer Motion
- ✅ Responsive design (mobile + desktop)

---

## 📋 Features Implemented

### Step 1: Diary Style
- Simple vs Detailed tracking options
- Visual cards with icons and feature lists
- Instant selection with feedback

### Step 2: Goals
- Weight goal selection (lose/maintain/gain)
- Pace selection (slow/moderate/fast)
- Target date picker with validation
- Optional target weight input
- Recommended dates based on pace

### Step 3: Body Metrics
- Current weight with kg/lbs conversion
- Height with cm/ft conversion
- Sex selection (male/female/other)
- Age validation (13+ years required)
- Real-time BMI calculation with category
- Unit toggle buttons

### Step 4: Dietary Preferences
- 12 cuisine options with emojis
- Favorite foods (custom input + tags)
- Allergies & restrictions:
  - Quick select from common allergies
  - Custom allergy input
  - Visual tag management
- Diet pattern selection (6 options)

### Step 5: Activity Level
- 5 activity levels (sedentary → extra active)
- Detailed descriptions with examples
- Calorie multiplier display
- Visual icons for each level

### Step 6: Time Constraints
- Max cook time (15/30/45/60+ min)
- Meals per day selector (2-6)
- Budget level (low/medium/high)
- Cooking skill level (beginner/intermediate/advanced)
- Live summary panel

---

## 🚀 Quick Start

### Installation

```bash
# Navigate to the project
cd nutriov7-phase2

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
nutriov7-phase2/
├── src/
│   ├── components/
│   │   └── Onboarding/
│   │       ├── OnboardingFlow.jsx          # Main flow orchestrator
│   │       ├── Step1DiaryStyle.jsx          # Diary style selection
│   │       ├── Step2Goals.jsx               # Goals & targets
│   │       ├── Step3BodyMetrics.jsx         # Body measurements
│   │       ├── Step4DietaryPrefs.jsx        # Diet preferences
│   │       ├── Step5ActivityLevel.jsx       # Activity level
│   │       └── Step6TimeConstraints.jsx     # Time & budget
│   ├── store/
│   │   ├── onboardingSlice.js              # Redux state management
│   │   └── store.js                         # Store configuration
│   ├── App.jsx                              # Main app with routing
│   ├── main.jsx                             # Entry point
│   └── index.css                            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🔧 Key Technologies

- **React 18** - UI framework
- **Redux Toolkit** - State management
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation

---

## 🎨 Key Features Explained

### 1. State Management

All onboarding data is managed through Redux with automatic persistence:

```javascript
// Data stored in Redux includes:
{
  currentStep: 1,
  diaryStyle: 'simple',
  weightGoal: 'lose',
  pace: 'moderate',
  currentWeight: 70,
  height: 170,
  cuisines: ['italian', 'asian'],
  // ... and more
}
```

### 2. Autosave

- Saves to localStorage every 30 seconds
- Saves on component unmount
- Loads saved progress on mount
- Manual save button available

### 3. Validation

Each step has real-time validation:
- Next button disabled until step is valid
- Helpful error messages
- Visual feedback (colors, icons)

### 4. Keyboard Navigation

- **→ Arrow Right**: Next step (if valid)
- **← Arrow Left**: Previous step
- **Enter**: Submit inputs
- Full keyboard accessibility

### 5. Accessibility

- ARIA labels on all interactive elements
- Focus management
- Screen reader friendly
- Color contrast compliant
- Reduced motion support

---

## 🔗 Integration with Part 1

To integrate this onboarding with your existing Nutrio v7 Part 1:

### Step 1: Copy Components

```bash
# Copy onboarding components to your Part 1 project
cp -r src/components/Onboarding /path/to/nutriov7-part1/src/components/
```

### Step 2: Copy Redux Slice

```bash
# Copy onboarding slice
cp src/store/onboardingSlice.js /path/to/nutriov7-part1/src/store/
```

### Step 3: Update Your Store

```javascript
// In your existing store.js
import onboardingReducer from './onboardingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,        // Your existing reducers
    onboarding: onboardingReducer  // Add this
  }
});
```

### Step 4: Add Route

```javascript
// In your App.jsx
import OnboardingFlow from './components/Onboarding/OnboardingFlow';

<Route path="/onboarding" element={<OnboardingFlow />} />
```

### Step 5: Redirect After Signup

```javascript
// In your SignUp component, after successful signup:
navigate('/onboarding');
```

---

## 📊 Data Flow

```
User completes Step 1
    ↓
Redux updates state
    ↓
Validation runs
    ↓
Step indicator updates
    ↓
Next button enables
    ↓
User clicks Next
    ↓
Save to localStorage
    ↓
Navigate to Step 2
    ↓
... repeat for all 6 steps ...
    ↓
Complete button clicked
    ↓
Navigate to Dashboard
```

---

## 🎯 Validation Rules

### Step 1: Diary Style
- Must select one option

### Step 2: Goals
- Must select weight goal
- Must select pace (if not maintaining)
- Must set target date

### Step 3: Body Metrics
- Current weight > 0
- Height > 0
- Sex must be selected
- Age must be 13-120

### Step 4: Dietary Preferences
- At least 1 cuisine selected
- Diet pattern must be selected

### Step 5: Activity Level
- Must select one level

### Step 6: Time Constraints
- Max cook time > 0
- Meals per day: 2-6
- Budget must be selected
- Cooking skill must be selected

---

## 🚨 Error Handling

Errors are displayed inline with helpful messages:

```javascript
{
  1: null,  // No error on Step 1
  2: "Please complete all goal fields",
  3: "You must be at least 13 years old",
  // ... etc
}
```

---

## 💾 localStorage Structure

```javascript
{
  "currentStep": 3,
  "diaryStyle": "detailed",
  "weightGoal": "lose",
  "pace": "moderate",
  "targetDate": "2025-06-01",
  "currentWeight": 75,
  "height": 175,
  "sex": "male",
  "age": 28,
  "cuisines": ["italian", "asian", "mediterranean"],
  "favoriteFoods": ["chicken", "pasta"],
  "allergies": ["nuts"],
  "dietPattern": "omnivore",
  "activityLevel": "moderate",
  "maxCookTime": 30,
  "mealsPerDay": 3,
  "budget": "medium",
  "cookingSkill": "intermediate",
  "stepValidation": {
    "1": true,
    "2": true,
    "3": false,
    "4": false,
    "5": false,
    "6": false
  },
  "lastSaved": "2025-11-09T01:30:00.000Z"
}
```

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#10b981',  // Your brand color
    }
  }
}
```

### Adjust Animations

Edit animation duration in components:

```javascript
transition={{ duration: 0.3 }}  // Change to your preference
```

### Modify Validation Rules

Edit rules in `onboardingSlice.js`:

```javascript
validateStep3: (state) => {
  const isValid = 
    state.currentWeight > 0 &&
    state.height > 0 &&
    state.age >= 18;  // Change minimum age
  // ...
}
```

---

## 🔄 API Integration

To save onboarding data to your backend:

```javascript
// In OnboardingFlow.jsx, modify handleComplete:

const handleComplete = async () => {
  const onboardingData = store.getState().onboarding;
  
  try {
    await fetch('/api/onboarding/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(onboardingData)
    });
    
    dispatch(completeOnboarding());
    navigate('/dashboard');
  } catch (error) {
    console.error('Failed to save onboarding:', error);
    // Show error to user
  }
};
```

---

## 📱 Mobile Responsiveness

All steps are fully responsive:
- Grid layouts adjust on smaller screens
- Touch-friendly button sizes
- Optimized for mobile scrolling
- Bottom navigation sticky on mobile

---

## ♿ Accessibility Features

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support
- High contrast mode compatible
- Reduced motion support

---

## 🐛 Known Issues & Solutions

### Issue: Tailwind classes not applying
**Solution**: Add to `safelist` in `tailwind.config.js`

### Issue: State not persisting
**Solution**: Check browser localStorage is enabled

### Issue: Animations laggy
**Solution**: Reduce motion or adjust `transition` durations

---

## 🚀 Next Steps

After completing Phase 2, proceed to:

1. **Phase 3**: Dashboard with Quote of Day & Meal Recommendations
2. **Phase 4**: Enhanced Meal Planner with smart recommendations
3. **Phase 5**: Receipt Scanner & Voice Correction
4. **Phase 6**: Comprehensive Account Page

---

## 📞 Support

For issues or questions:
1. Check this README
2. Review component code comments
3. Test in browser console for errors

---

## ✅ Testing Checklist

- [ ] Can navigate through all 6 steps
- [ ] Validation works on each step
- [ ] Next button disabled when invalid
- [ ] Back button works correctly
- [ ] Autosave happens every 30 seconds
- [ ] Manual save button works
- [ ] Progress bar updates correctly
- [ ] Step indicators show completion
- [ ] Keyboard navigation works
- [ ] Mobile responsive
- [ ] Completes and navigates to dashboard
- [ ] localStorage persists data
- [ ] Can resume from saved state

---

## 🎉 Features Highlights

✨ **Beautiful UI** with smooth animations
🔒 **Secure** with client-side validation
💾 **Reliable** with autosave functionality
♿ **Accessible** with full ARIA support
📱 **Responsive** for all screen sizes
⚡ **Fast** with optimized React performance
🎯 **Validated** with comprehensive error handling

---

**Built with ❤️ for Nutrio v7**
