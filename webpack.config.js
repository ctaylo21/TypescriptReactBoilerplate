/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(s*)css$/,
        use: [
          argv.mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer:
      argv.mode === 'production'
        ? [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
        : [],
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, './src/templates/index.html'),
      title: 'TS React Boilerplate',
    }),
    new MiniCssExtractPlugin({
      filename: argv.mode === 'production' ? '[name].[hash].css' : '[name].css',
      chunkFilename:
        argv.mode === 'production' ? '[id].[hash].css' : '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
});
