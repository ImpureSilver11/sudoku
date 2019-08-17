var path = require('path');

module.exports = {
  mode: 'development',
  entry: './dist/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};