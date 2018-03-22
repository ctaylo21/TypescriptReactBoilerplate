const path = require('path')
const merge = require('webpack-merge')
const common = require('./base.js')

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map'
})
