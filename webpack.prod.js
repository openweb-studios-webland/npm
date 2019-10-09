const dotenv = require('dotenv').config()
const common = require('./webpack.js')
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // Number of loaders before css-loader (i.e. style-loader)
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './config',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './**/*', to: './' }], {
      context: `./${process.env.THEME_PATH}/assets`,
      ignore: ['*.css', '*.scss', '*.sass', '*.js'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ManifestPlugin({
      publicPath: '',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, `${process.env.THEME_PATH}/build`),
    publicPath: `/${path.relative('./web', `./${process.env.THEME_PATH}/build`)}/`,
  },
})
