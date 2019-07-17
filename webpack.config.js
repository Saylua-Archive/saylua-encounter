const path = require('path');

module.exports = {
  entry: './src/components/sl-app.js',
  output: {
    filename: 'sl-app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: '.'
  }
};
