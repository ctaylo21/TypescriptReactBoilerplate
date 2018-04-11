const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // babelrc: false, TODO: Adding this breaks mocha-webpack's watch
            presets: [
              ['@babel/env', {
                targets: {
                  browsers: [
                    'last 2 versions',
                    'not IE <= 10'
                  ]
                },
                modules: false
              }]
            ],
            env: {
              'test': {
                'plugins': ['istanbul']
              }
            }
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
