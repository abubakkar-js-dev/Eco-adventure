/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#6CDBEB',
        secondary: '#52796F',
        'snow-white': '#F9F9F9',
        'soft-silver': '#BCCCDC',
        'burnt-orange': '#F4A261'
      }
    },
  },
  plugins: [
    daisyui,  
  ],
}

