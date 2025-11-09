import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOnboardingComplete } from '../store/authSlice';
import toast from 'react-hot-toast';

const Onboarding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(setOnboardingComplete(true));
    toast.success('Onboarding completed!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Nutrio!</h1>
        <p className="text-center text-gray-600 mb-8">
          Complete Onboarding Flow Coming in Part 2
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 1: Diary Style</h3>
            <p className="text-sm text-gray-600">Choose your logging style</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 2: Goals</h3>
            <p className="text-sm text-gray-600">Set your nutrition goals</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 3: Body Metrics</h3>
            <p className="text-sm text-gray-600">Enter weight, height, age</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 4: Dietary Preferences</h3>
            <p className="text-sm text-gray-600">Cuisines, favorites, allergies</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 5: Activity Level</h3>
            <p className="text-sm text-gray-600">How active are you?</p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Step 6: Time Constraints</h3>
            <p className="text-sm text-gray-600">Cook time and budget</p>
          </div>
        </div>

        <button
          onClick={handleComplete}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition"
        >
          Skip to Dashboard (Temporary)
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
