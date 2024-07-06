/** @type {import('next').NextConfig} */
// const nextConfig = {}
// module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/random-quote' : '',
  assetPrefix: isProd ? '/random-quote/' : '',
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig