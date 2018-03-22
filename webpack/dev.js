const path = require('path')
const merge = require('webpack-merge')
const common = require('./base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
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
