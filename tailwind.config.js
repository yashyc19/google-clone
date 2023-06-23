/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, js}',
    './pages/**/*.{html, js}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#202124',
        'secondary': '#3c4043'
      },
    },
  },
  plugins: [],
}

