import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import WebpackDevServer from 'webpack-dev-server';
import * as Karma from 'karma';

gulp.task('default', ['webpack']);

gulp.task('babel', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('target/js'));
});

gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true,
      errLogToConsole: true
    }))
    .pipe(gulp.dest('target/css'));
});

gulp.task('test', ['babel', 'sass'], (done) => {
  new Karma.Server({
    configFile: __dirname + '/unit_test.conf.js',
    singleRun: true
  }, function () {
    new Karma.Server({
      configFile: __dirname + '/integration_test.conf.js',
      singleRun: true
    }, done).start();
  }).start();
});

gulp.task('watch-test', () => {
  return gulp.watch(['src/**', 'test/**'], ['test']);
});

gulp.task('webpack', ['test'], function(callback) {
  var myConfig = Object.assign({}, webpackConfig);
  if (myConfig.plugins == null) {
    myConfig.plugins = [];
  }

  myConfig.plugins.push(... [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]);

  // run webpack
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      colors: true,
      progress: true
    }));
    callback();
  });

  // copy css
  gulp.src(['target/css/tiny-ui.css'])
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('server', ['webpack'], function(callback) {
  // modify some webpack config options
  var myConfig = Object.assign({}, webpackConfig);
  myConfig.devtool = 'eval';
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: '/' + myConfig.output.publicPath,
    stats: {
      colors: true
    },
    hot: true
  }).listen(8080, 'localhost', function(err) {
    if (err) throw new gutil.PluginError('tiny-ui-dev-server', err);
    gutil.log('[tiny-ui--dev-server]', 'http://localhost:8080/public/index.html');
  });
});
