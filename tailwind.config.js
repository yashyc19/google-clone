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
        'active': '#303134',
        'hover': 'rgba(232,234,237,.08)',
      },
    },
  },
  plugins: [],
}

