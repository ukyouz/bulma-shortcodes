const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  stats: {
    errorDetails: true,
  },
  entry: './javascript/src/index.js',
  output: {
    filename: 'bulma_shortcodes_plugin.js',
    path: resolve(__dirname),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve(__dirname, 'javascript', 'src'),
    },
  },
};
