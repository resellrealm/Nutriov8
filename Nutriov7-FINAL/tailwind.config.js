/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        accent: '#84cc16',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.2s ease-out',
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
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
  // Safelist dynamic Tailwind classes used in onboarding
  safelist: [
    {
      pattern: /(bg|text|border)-(emerald|teal|rose|amber|blue|gray|red)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
}
