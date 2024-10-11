/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      }
    },
    colors: {
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        500: '#3b82f6',
        600: '#2563eb'
      },
      green: {
        500: '#22c55e'
      },
      slate : {
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b', 
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617'
      },
      red: {
        600: '#dc2626'
      },
      yellow: {
        300: '#fde047'
      },
      pink: {
        500: '#ec4899'
      }
    }
  },
  corePlugins: {
    preflight: true
  },
  plugins: [],
}