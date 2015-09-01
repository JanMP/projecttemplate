var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    connect = require('gulp-connect');

var coffeeSrc = ['./src/coffeescript/*.coffee'],
    jadeSrc = ['./src/jade/*.jade'],
    stylusSrc =['./src/stylus/*.styl'],
    htmlSrc = ['./dest/**/*.*'];

gulp.task('coffee', function() {
  gulp.src(coffeeSrc)
  .pipe(coffee({bare : true})).on('error', gutil.log)
  .pipe(gulp.dest('./dest/js/'));
});

gulp.task('jade', function() {
  var locals = {};
  gulp.src(jadeSrc)
  .pipe(jade({locals: locals}))
  .pipe(gulp.dest('./dest/'));
});

gulp.task('stylus', function() {
  gulp.src(stylusSrc)
  .pipe(stylus())
  .pipe(gulp.dest('./dest/css/'));
});

gulp.task('html', function() {
  gulp.src(htmlSrc)
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(coffeeSrc, ['coffee']);
  gulp.watch(jadeSrc, ['jade']);
  gulp.watch(stylusSrc, ['stylus']);
  gulp.watch(htmlSrc, ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: './dest/',
    livereload: true
  });
});



gulp.task('default', ['html', 'coffee', 'jade', 'stylus', 'connect', 'watch']);