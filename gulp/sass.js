var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass');

exports.toCss = sassToCss;
exports.toCssWatch = sassToCssWatch;

function sassToCss() {
  return gulp.src('./lib/components/App/App.scss')
    .pipe(sass())
    .on('error', gutil.log.bind(gutil, 'SASS Error'))
    .pipe(gulp.dest('./dist'));
}

function sassToCssWatch() {
  sassToCss();
  return gulp.watch('./lib/components/**/*.scss', sassToCss);
}
