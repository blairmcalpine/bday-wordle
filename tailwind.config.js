/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"HelveticaNeueLT Std"', 'sans-serif'],
      },
      colors: {
        lightGray: '#3a3a3c',
        darkGray: '#121213',
      },
    },
  },
  plugins: [],
}
