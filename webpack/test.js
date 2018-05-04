const path = require('path')
const common = require('./base.js')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../test/all.js'),
  output: {
    filename: 'test.bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'eval',
  serve: {
    content: [path.resolve(__dirname, '../dist/'), path.resolve(__dirname, '../node_modules/')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Unit Tests',
      template: path.resolve(__dirname, '../src/templates/test.html')
    })
  ]
})
