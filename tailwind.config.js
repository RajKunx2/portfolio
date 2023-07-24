/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Creative: ['Creative', 'sans-serif'],
        blogger: ['blogger', 'sans-serif'],
        Lovers: ['Lovers', 'sans-serif'],
        Dosis: ['Dosis', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Josefin: ['Josefin Sans', "sans-serif"],
        Poiret: ['Poiret One', 'cursive'], 
      }
    },
  },
  plugins: [],
}
