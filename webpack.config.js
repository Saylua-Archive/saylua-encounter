/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './src/components/sl-app',
  output: {
    filename: 'sl-app',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: '.',
  },
};
