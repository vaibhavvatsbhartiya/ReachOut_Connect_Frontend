/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom1': '2rem', // Define a custom border size named 'custom'
        'custom2': '10rem', 
        'custom3': '12rem',
        'custom4': '10rem',
        'custom5': '10rem',
      },
      height: {
        'customheight': '35rem', // used in InfoCard.jsx => Landing Page
      },
    },
  },
  plugins: [],
}

