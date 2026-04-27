/** @type {import('next').NextConfig} */
const repoName = 'timerx-website';

const nextConfig = {
  output: 'export', // Enables static site export
  basePath: `/${repoName}`, // Serves pages from the GitHub Pages project path
  assetPrefix: `/${repoName}/`, // Ensures static assets resolve on GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;
