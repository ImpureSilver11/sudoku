var path = require('path');

module.exports = {

  //エントリポイントのJavaScript
  entry: './dist/main.js',

  output: {
    //出力先のフォルダ
    path: path.resolve(__dirname, 'build'),
    //出力先のファイル名
    filename: 'bundle.js'
  }
};