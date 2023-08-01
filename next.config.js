/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
// tailwind.config.js

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
  images: {
    domains: ['images.unsplash.com', "i.ibb.co", "res.cloudinary.com"],
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
