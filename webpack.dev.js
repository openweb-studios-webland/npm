const dotenv = require('dotenv').config()
const common = require('./webpack.js')
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // Number of loaders before css-loader (i.e. style-loader)
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './config',
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: process.env.WP_HOME,
      files: [
        `${process.env.THEME_PATH}/assets/scripts/index.js`,
        `${process.env.THEME_PATH}/**/*.php`,
        `${process.env.THEME_PATH}/views/**/*.twig`,
      ],
    }),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, `${process.env.THEME_PATH}/build`),
    publicPath: `/${path.relative('./web', `./${process.env.THEME_PATH}/build`)}/`,
  },
})
