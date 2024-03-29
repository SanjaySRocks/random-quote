/** @type {import('next').NextConfig} */
// const nextConfig = {}
// module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/random-quote' : '',
  assetPrefix: isProd ? '/random-quote/' : '',
  output: 'export',
};
