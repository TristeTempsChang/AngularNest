/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'standard': ["Montserrat"],
      'serif': ['ui-serif'],
      'sans': ['ui-sans-serif', 'system-ui']
    }
  },
  plugins: [],
}

