const path = require('path')
const merge = require('webpack-merge')
const common = require('./base.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map'
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})
