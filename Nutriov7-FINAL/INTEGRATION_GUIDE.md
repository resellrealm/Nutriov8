# Integration Guide: Phase 2 → Part 1

## 🎯 Goal
Integrate the complete 6-step onboarding flow into your existing Nutrio v7 Part 1 project.

---

## 📋 Prerequisites

Before starting integration:
- ✅ Part 1 is working (auth + layout + basic routing)
- ✅ Redux is set up in Part 1
- ✅ React Router is configured
- ✅ Tailwind CSS is working

---

## 🔧 Step-by-Step Integration

### 1. Install Additional Dependencies

```bash
cd /path/to/nutriov7-part1

# Install Framer Motion (for animations)
npm install framer-motion@^10.16.16

# Verify Lucide React is installed (should be from Part 1)
npm list lucide-react
```

### 2. Copy Onboarding Components

```bash
# Option A: Manual copy
# Copy the entire Onboarding folder from Phase 2 to Part 1
cp -r /path/to/nutriov7-phase2/src/components/Onboarding \
      /path/to/nutriov7-part1/src/components/

# Option B: Create symbolic link (for development)
ln -s /path/to/nutriov7-phase2/src/components/Onboarding \
      /path/to/nutriov7-part1/src/components/Onboarding
```

### 3. Copy Redux Slice

```bash
# Copy the onboarding slice
cp /path/to/nutriov7-phase2/src/store/onboardingSlice.js \
   /path/to/nutriov7-part1/src/store/
```

### 4. Update Your Redux Store

Edit `/path/to/nutriov7-part1/src/store/store.js`:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import onboardingReducer from './onboardingSlice';  // ADD THIS

// Load persisted onboarding state
const loadOnboardingState = () => {
  try {
    const serializedState = localStorage.getItem('onboarding_progress');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load onboarding state:', err);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    onboarding: onboardingReducer  // ADD THIS
  },
  preloadedState: {
    onboarding: loadOnboardingState()  // ADD THIS
  }
});

// Subscribe to save onboarding state
store.subscribe(() => {
  try {
    const state = store.getState().onboarding;
    localStorage.setItem('onboarding_progress', JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save onboarding state:', err);
  }
});

export default store;
```

### 5. Add Onboarding Route

Edit `/path/to/nutriov7-part1/src/App.jsx`:

```javascript
import OnboardingFlow from './components/Onboarding/OnboardingFlow';

// In your Routes:
<Routes>
  <Route path="/" element={<Navigate to="/signin" />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  
  {/* ADD THIS ROUTE */}
  <Route path="/onboarding" element={<OnboardingFlow />} />
  
  {/* Protected routes */}
  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    {/* ... other routes */}
  </Route>
</Routes>
```

### 6. Update SignUp Flow

Edit `/path/to/nutriov7-part1/src/pages/SignUp.jsx`:

```javascript
const handleSignUp = async (e) => {
  e.preventDefault();
  
  try {
    // Your existing signup logic
    const response = await signUpUser(email, password);
    
    if (response.success) {
      // Store auth token
      localStorage.setItem('authToken', response.token);
      
      // Redirect to onboarding instead of dashboard
      navigate('/onboarding');  // CHANGE THIS LINE
    }
  } catch (error) {
    setError(error.message);
  }
};
```

### 7. Update Tailwind Config

Edit `/path/to/nutriov7-part1/tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #00FF88, 0 0 10px #00FF88, 0 0 15px #00FF88',
            opacity: '0.6',
          },
          '50%': {
            boxShadow: '0 0 10px #00FF88, 0 0 20px #00FF88, 0 0 30px #00FF88',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
  // ADD THIS SAFELIST for dynamic color classes
  safelist: [
    {
      pattern: /(bg|text|border)-(emerald|teal|rose|amber|blue|gray|red)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
}
```

### 8. Protect Dashboard Route

Create a check for onboarding completion in your ProtectedRoute:

```javascript
// In ProtectedRoute.jsx or wherever you guard routes
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const { isComplete } = useSelector(state => state.onboarding);
  
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  
  // Redirect to onboarding if not complete
  if (!isComplete) {
    return <Navigate to="/onboarding" />;
  }
  
  return <Outlet />;
};
```

---

## 🧪 Testing Your Integration

### Test Checklist

1. **Sign Up Flow**
   ```
   - [ ] Sign up with new account
   - [ ] Redirects to /onboarding
   - [ ] Step 1 loads correctly
   ```

2. **Onboarding Steps**
   ```
   - [ ] Can complete Step 1 (Diary Style)
   - [ ] Can complete Step 2 (Goals)
   - [ ] Can complete Step 3 (Body Metrics)
   - [ ] Can complete Step 4 (Dietary Prefs)
   - [ ] Can complete Step 5 (Activity Level)
   - [ ] Can complete Step 6 (Time Constraints)
   ```

3. **Validation**
   ```
   - [ ] Next button disabled when step invalid
   - [ ] Error messages show correctly
   - [ ] Required field indicators work
   ```

4. **Save & Resume**
   ```
   - [ ] Close browser mid-onboarding
   - [ ] Reopen and navigate to /onboarding
   - [ ] Should resume from saved step
   - [ ] All data should be preserved
   ```

5. **Keyboard Navigation**
   ```
   - [ ] Arrow Right advances (when valid)
   - [ ] Arrow Left goes back
   - [ ] Tab navigates through fields
   - [ ] Enter submits forms
   ```

6. **Completion**
   ```
   - [ ] Complete all 6 steps
   - [ ] Redirects to /dashboard
   - [ ] Cannot access onboarding again
   - [ ] Can access all protected routes
   ```

---

## 🎨 Customization After Integration

### Adjust for Your Brand Colors

Replace `emerald` with your brand color throughout the onboarding components:

```bash
# Find all instances of emerald color
grep -r "emerald" src/components/Onboarding/

# Replace with your color (e.g., 'blue', 'purple', 'indigo')
# Edit each file manually or use sed:
sed -i 's/emerald-/blue-/g' src/components/Onboarding/*.jsx
```

### Add Analytics Tracking

In `OnboardingFlow.jsx`, add tracking:

```javascript
const handleNext = () => {
  // Track step completion
  analytics.track('Onboarding Step Completed', {
    step: currentStep,
    timestamp: new Date()
  });
  
  if (currentStep === totalSteps) {
    handleComplete();
  } else {
    dispatch(nextStep());
  }
};
```

### Customize Success Message

In `OnboardingFlow.jsx`, change the completion handler:

```javascript
const handleComplete = async () => {
  dispatch(completeOnboarding());
  
  // Show success toast/modal
  toast.success('Welcome to Nutrio! 🎉');
  
  // Optional: Send data to backend
  await saveOnboardingData(store.getState().onboarding);
  
  navigate('/dashboard');
};
```

---

## 🔄 API Integration

### Save Onboarding Data to Backend

Create an API service:

```javascript
// src/services/onboardingService.js
export const saveOnboardingData = async (data) => {
  const response = await fetch('/api/user/onboarding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify(data)
  });
  
  if (!response.ok) {
    throw new Error('Failed to save onboarding data');
  }
  
  return response.json();
};
```

Use it in `OnboardingFlow.jsx`:

```javascript
import { saveOnboardingData } from '../../services/onboardingService';

const handleComplete = async () => {
  try {
    const onboardingData = store.getState().onboarding;
    await saveOnboardingData(onboardingData);
    
    dispatch(completeOnboarding());
    navigate('/dashboard');
  } catch (error) {
    console.error('Failed to save onboarding:', error);
    // Show error to user
    toast.error('Failed to save your preferences. Please try again.');
  }
};
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot find module 'framer-motion'"
```bash
# Solution: Install framer-motion
npm install framer-motion
```

### Issue 2: Tailwind classes not applying
```bash
# Solution: Rebuild Tailwind and restart dev server
npm run build
npm run dev
```

### Issue 3: Redux state not persisting
```javascript
// Solution: Check localStorage is enabled
if (typeof window !== 'undefined' && window.localStorage) {
  // localStorage is available
}
```

### Issue 4: Onboarding shows after completion
```javascript
// Solution: Ensure isComplete is set
dispatch(completeOnboarding());

// And check in ProtectedRoute
const { isComplete } = useSelector(state => state.onboarding);
if (!isComplete) {
  return <Navigate to="/onboarding" />;
}
```

---

## 📊 Data Flow After Integration

```
User signs up
    ↓
SignUp.jsx redirects to /onboarding
    ↓
OnboardingFlow loads
    ↓
Check localStorage for saved progress
    ↓
If progress exists → Resume from saved step
    ↓
If no progress → Start at Step 1
    ↓
User completes all 6 steps
    ↓
handleComplete() called
    ↓
(Optional) POST data to backend API
    ↓
completeOnboarding() action dispatched
    ↓
Navigate to /dashboard
    ↓
ProtectedRoute checks isComplete
    ↓
Dashboard loads successfully
```

---

## ✅ Final Verification

After integration, verify:

1. **Authentication Flow**
   - Sign up → Onboarding → Dashboard ✓
   - Sign in (existing user) → Dashboard (skip onboarding) ✓

2. **Onboarding Flow**
   - All 6 steps load ✓
   - Validation works ✓
   - Save/resume works ✓
   - Completion redirects ✓

3. **Protected Routes**
   - Cannot access dashboard without onboarding ✓
   - After onboarding, can access all routes ✓

4. **Responsive Design**
   - Mobile layout works ✓
   - Desktop layout works ✓
   - Tablet layout works ✓

---

## 🚀 Next Phase

Once Phase 2 is integrated, you're ready for:

**Phase 3: Enhanced Dashboard**
- Quote of Day with pulsing border
- Daily Meal Recommendation
- Integration with onboarding data

---

## 📞 Need Help?

Common resources:
- Check browser console for errors
- Verify all files copied correctly
- Test localStorage in DevTools
- Check Redux DevTools for state

---

**Integration Complete! 🎉**

Your users will now have a smooth, comprehensive onboarding experience!
