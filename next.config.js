/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  assetPrefix: '/', // Ensures correct asset paths for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;
