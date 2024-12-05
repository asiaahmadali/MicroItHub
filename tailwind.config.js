/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          screens:{
            'xl1440':'1440px' 
          },
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            raleway: ['Raleway', 'sans-serif'],
          },
     
    },
  },
  plugins: [],
}

