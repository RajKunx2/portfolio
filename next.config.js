/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
// tailwind.config.js

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
