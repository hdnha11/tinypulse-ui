require('core-js');

const isDebug = process.env.NODE_ENV !== 'production';
const PORT = 8000;

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var scssLoader = {
  test: /\.scss$/
};
var fontLoader = {
  test: /\.woff2|eot|ttf|svg|woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'url'
};

var config = {
  entry: [
    './src/js/main.js'
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['babel-loader?cacheDirectory&presets[]=es2015'],
      exclude: /(node_modules)/
    }]
  },
  debug: isDebug,
  devtool: isDebug ? 'source-map' : false,
  output: {
    path: './dist',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      __DEV__: isDebug,
    }),
    new webpack.ProvidePlugin({
      "window.MutationObserver": "mutationobserver-shim"
    })
  ],
  devServer: {
    contentBase: './dist',
    inline: true,
    watch: true,
    hot: true,
    port: PORT
  }
};

if (isDebug) {
  config.entry.push('webpack/hot/dev-server');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  scssLoader.loader = 'style!css?sourceMap!sass?sourceMap';
} else {
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin('common.js'));
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  }));
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  config.plugins.push(new ExtractTextPlugin('bundle.css'));
  scssLoader.loader = ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap=true&sourceMapContents=true');
}

config.module.loaders.push(scssLoader);
config.module.loaders.push(fontLoader);

module.exports = config;
