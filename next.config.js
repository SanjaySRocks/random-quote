const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Existing configuration options
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  // Add this line
  output: 'export',
};
