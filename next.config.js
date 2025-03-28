/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  basePath: process.env.NODE_ENV === 'production' ? '/timerx-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/timerx-website/' : '',
};

module.exports = nextConfig;
