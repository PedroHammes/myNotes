/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      black: '#000000',
      grey: '#56f7fb',
      blue: '#3c79fd'
    }
  },
  plugins: [],
}