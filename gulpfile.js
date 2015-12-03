var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

var currentDay = gutil.env.day;
console.log('Current day: ' + currentDay);

gulp.task('js', function() {
  gulp.src('solutions/'+ currentDay +'.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('dest'));
});

gulp.task('watch', function() {
    gulp.watch('solutions/**/*.js', ['js']);
});

gulp.task('default', ['watch']);
