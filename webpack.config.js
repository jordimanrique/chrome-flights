const path = require('path');

module.exports = {
  entry: './src/background.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'background.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};