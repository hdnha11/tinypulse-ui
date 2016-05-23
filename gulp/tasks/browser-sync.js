'use strict';

var gulp = require('gulp'),
  config = require('../config.json'),
  browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./docs/",
      routes: {
        "/bower_components": "bower_components",
        "/dist": "dist"
      }
    }
  });
});
