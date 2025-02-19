import { Outfit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       lighthover: '#fcf4ff',
       darkhover: '#2a004a',
       darkTheme: '#11001F',
      },
      fontFamily:{
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"]
      },
      boxShadow:{
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff'
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
};
