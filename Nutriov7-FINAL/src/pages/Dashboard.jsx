import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, Flame, Target } from 'lucide-react';

const quotes = [
  "Every meal is a new beginning.",
  "Small changes lead to big results.",
  "Your body is a reflection of your lifestyle.",
  "Progress, not perfection.",
  "Nourish your body, feed your soul.",
  "Health is wealth.",
  "You are what you eat.",
  "Start where you are, use what you have.",
  "Take care of your body, it's the only place you have to live.",
  "Eat well, live well, be well.",
];

const Dashboard = () => {
  const [quoteOfDay, setQuoteOfDay] = useState('');
  const [dailyMeal, setDailyMeal] = useState(null);

  useEffect(() => {
    // Get quote of the day (changes daily)
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    setQuoteOfDay(quotes[dayOfYear % quotes.length]);

    // Mock daily meal recommendation
    setDailyMeal({
      name: 'Grilled Chicken Buddha Bowl',
      description: 'A healthy, protein-packed meal with quinoa, grilled chicken, roasted vegetables, and tahini dressing.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
      calories: 450,
      protein: 35,
      prepTime: 25,
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back! 👋
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Here's your nutrition overview for today
        </p>
      </div>

      {/* Quote of the Day with Pulsing Green Border */}
      <div className="pulse-glow-border p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
        <div className="flex items-start space-x-3">
          <div className="text-3xl">✨</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Quote of the Day
            </h3>
            <p className="text-gray-700 dark:text-gray-300 italic text-lg">
              "{quoteOfDay}"
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Calories Today</span>
            <Activity className="text-primary" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">850</p>
          <p className="text-xs text-gray-500">of 2000 goal</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Current Streak</span>
            <Flame className="text-orange-500" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">7 days</p>
          <p className="text-xs text-gray-500">Personal best!</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Protein</span>
            <Target className="text-purple-500" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">45g</p>
          <p className="text-xs text-gray-500">of 120g goal</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Weight</span>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">72 kg</p>
          <p className="text-xs text-gray-500">-2kg this month</p>
        </div>
      </div>

      {/* Today's Meal Recommendation */}
      {dailyMeal && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 pb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Today's Meal Recommendation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Freshly selected for you
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={dailyMeal.image}
                alt={dailyMeal.name}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>

            <div className="p-6 md:w-2/3">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {dailyMeal.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {dailyMeal.description}
              </p>

              <div className="flex items-center space-x-6 mb-4">
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Calories</span>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {dailyMeal.calories}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Protein</span>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {dailyMeal.protein}g
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Prep Time</span>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {dailyMeal.prepTime} min
                  </p>
                </div>
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition">
                View Full Recipe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for charts (Part 2) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Weekly Progress
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Charts and graphs coming in Part 2
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
