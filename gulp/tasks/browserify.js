'use strict';

var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  config = require('../config.json'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('babelify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  browserSync = require('browser-sync'),
  handleErrors = require('../utils/handle-errors');

gulp.task('browserify', function() {
  var bundler = browserify(config.src + 'js/main.js', watchify.args).transform(babel),
    bundle = function() {
      return bundler
        .bundle()
        .on('error', handleErrors)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dist + config.javascript))
        .pipe(gulpif(global.isWatching, browserSync.reload({ stream: true })));
    };

  if (global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});
