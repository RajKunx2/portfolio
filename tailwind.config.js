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
        Dosis: ['Dosis', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Poiret: ['Poiret One', 'cursive'],
      }
    },
  },
  plugins: [],
}
