/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  assetPrefix: '/', // Custom domain serves the site from the domain root
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;
