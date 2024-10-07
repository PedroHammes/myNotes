/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        500: '#3b82f6',
        600: '#2563eb'
      },
      slate : {
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
      }
    }
  },
  plugins: [],
}