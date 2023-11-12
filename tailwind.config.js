/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor :{
        'dark-purple': "#190482",
        'light-dark-purple': "#7752FE",
        'light-purple': "#8E8FFA",
        'extra-light-purple': '#C2D9FF'


      },
    
    },
  },
  plugins: [],
}
