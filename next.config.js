/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Existing configuration options
  assetPrefix: isProd ? '/<repository>/' : '',
  basePath: isProd ? '/<repository>' : '',
  // Add this line
  output: 'export',
};
