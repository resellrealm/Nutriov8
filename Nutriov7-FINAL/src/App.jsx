import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import OnboardingFlow from './components/Onboarding/OnboardingFlow';
import Dashboard from './pages/Dashboard';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, hasCompletedOnboarding } = useSelector((state) => state.auth);
  const { isComplete } = useSelector((state) => state.onboarding);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // Check if onboarding is complete (use new state structure)
  if (!isComplete && !hasCompletedOnboarding && !window.location.pathname.includes('onboarding')) {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
};

// Auth Route Component (redirect if already logged in)
const AuthRoute = ({ children }) => {
  const { isAuthenticated, hasCompletedOnboarding } = useSelector((state) => state.auth);
  const { isComplete } = useSelector((state) => state.onboarding);

  if (isAuthenticated && (hasCompletedOnboarding || isComplete)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      <Routes>
        {/* Auth Routes */}
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthRoute>
              <SignIn />
            </AuthRoute>
          }
        />

        {/* Onboarding Route - Complete 6-step flow */}
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <OnboardingFlow />
            </ProtectedRoute>
          }
        />

        {/* Protected App Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="analyze" element={<div>Analyze Meal (Coming in Part 2)</div>} />
          <Route path="meal-planner" element={<div>Meal Planner (Coming in Part 2)</div>} />
          <Route path="goals" element={<div>Goals (Coming in Part 2)</div>} />
          <Route path="favourites" element={<div>Favourites (Coming in Part 2)</div>} />
          <Route path="achievements" element={<div>Achievements (Coming in Part 2)</div>} />
          <Route path="history" element={<div>History (Coming in Part 2)</div>} />
          <Route path="account" element={<div>Account (Coming in Part 2)</div>} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
