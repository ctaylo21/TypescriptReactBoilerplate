const path = require('path');
const merge = require('webpack-merge');
const common = require('./base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ES6 modules and Webpack Starter Kit',
      template: path.resolve(__dirname, '../src/templates/index.html')
    })
  ]
});
