// This extends Gatsby's Webpack configuration
// It is placed in this file for ESLint
// See modifyWebpackConfig in gatsby-node.js

const path = require('path');

module.exports = {
  resolve: {
    alias: {
      config: path.join(__dirname, 'config'),
      components: path.join(__dirname, 'src', 'components')
    }
  }
};
