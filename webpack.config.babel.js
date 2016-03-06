import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: {
    preload: './target/js/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    publicPath: '../dist/js/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  resolve: {
    root: [path.join(__dirname, 'bower_components')]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    )
  ]
};
