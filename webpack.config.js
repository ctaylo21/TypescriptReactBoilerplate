/* eslint-disable @typescript-eslint/no-var-requires */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, './src/templates/index.html'),
      title: 'TS React Boilerplate',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
