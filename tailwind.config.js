/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false, // Disable the reset
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

