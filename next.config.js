/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/timerx-website',        // So that paths become /timerx-website/...
  assetPrefix: '/timerx-website/',    // Ensures _next/static/ and other assets load from /timerx-website/
};

module.exports = nextConfig;
