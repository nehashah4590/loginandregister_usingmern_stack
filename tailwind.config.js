/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'calc-custom': 'calc(100vw - 385px)',
      },
    },
  },
  plugins: [],
}

