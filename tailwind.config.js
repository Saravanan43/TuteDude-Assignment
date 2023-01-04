/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white':'#FFFFFF',
        'purple':'#800080',
        'gray':'#E5E5E5',
        'dynamic':'#800080',
        'dynamix' : '#FF864C',
        'dark':'#4D4D4D',
        'icon':'#D9D9D9'    
      },
      letterSpacing:{
        wide:'1em',
        widest:'0.7em'
      }
    },
  },
  plugins: [],
}
