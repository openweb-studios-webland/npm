const dotenv = require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: `./${process.env.THEME_PATH}/assets/scripts/index.js`,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|css|s?[ca]ss)$/,
        loader: 'import-glob',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              extends: './config/.babelrc',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|jp(e*)g|gif|svg)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}
