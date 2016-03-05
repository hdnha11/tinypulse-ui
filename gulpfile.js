var gulp = require('gulp');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var bump = require('gulp-bump');
var semver = require('semver');
var fs = require('fs');
var argv = require('yargs').argv;

var getPackageJson = function() {
  return JSON.parse(fs.readFileSync('package.json', 'utf8'));
};

gulp.task('build-js', function() {
  return gulp.src('src/js/tiny-ui.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-scss', function() {
  return gulp.src('src/scss/tiny-ui.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true,
      errLogToConsole: true
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', ['build'], function() {
  return gulp.src(['dist/js/**/*.js', '!dist/js/**/*.min.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('minify-css', ['build'], function() {
  gulp.src(['dist/css/**/*.css', '!dist/css/**/*.min.css'])
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('bump', ['build'], function() {
  var package = getPackageJson();
  var versionType;

  if (argv.major) {
    versionType = 'major';
  } else if (argv.minor) {
    versionType = 'minor';
  } else {
    versionType = 'patch';
  }

  // Increment version
  var newVersion = semver.inc(package.version, versionType);

  return gulp.src(['package.json', 'bower.json'])
    .pipe(bump({
      version: newVersion
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
  gulp.watch('src/**/*.scss', ['build']);
});

gulp.task('default', ['watch']);
gulp.task('build', ['build-js', 'build-scss']);
gulp.task('minify', ['minify-js', 'minify-css']);
gulp.task('release', ['build', 'bump', 'minify']);
