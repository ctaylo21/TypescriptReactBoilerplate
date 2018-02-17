const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./base.js')

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
