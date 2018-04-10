const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'app.[md5:contenthash:hex:20].css'
})

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
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    extractSass
  ]
}
