import path from 'path';

module.exports = {
  entry: {
    preload: './target/js/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    publicPath: '../dist/js/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  }
};
