const path = require('path')
const merge = require('webpack-merge')
const common = require('./base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/'),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jumpstart',
      template: path.resolve(__dirname, '../src/templates/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
