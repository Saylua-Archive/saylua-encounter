/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'sl-app': './src/components/sl-app.js',
    'webcomponents-loader': './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
  },
  output: {
    filename: '[name].[contenthash].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: '.',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin([
      {from: 'images', to: 'images'},
      {from: 'manifest.json', to: 'manifest.json'},
    ]),
  ],
};
