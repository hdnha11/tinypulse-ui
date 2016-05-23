'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  config = require('../config.json');

gulp.task('watch', function() {
  gulp.watch(config.src + 'app/views/**/*.html', ['browserify']);
  gulp.watch(config.src + 'index.html', ['copy', browserSync.reload]);
  gulp.watch(config.src + 'scss/**/*.' + config.cssSrcExtension, ['styles:dev']);
  gulp.watch(config.src + 'app/views/**/*.js', ['lint']);
});
