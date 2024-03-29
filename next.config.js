const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Existing configuration options
  basePath: isProd ? '/random-quote' : '',
  assetPrefix: isProd ? '/random-quote/' : '',
  // Add this line
  output: 'export',
};
