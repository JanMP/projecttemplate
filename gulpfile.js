var gulp = require('gulp'),
  coffee = require('gulp-coffee'),
  cjsx = require('gulp-cjsx'),
  gutil = require('gulp-util'),
  jade = require('gulp-jade'),
  sass = require('gulp-ruby-sass'),
  stylus = require('gulp-stylus'),
  connect = require('gulp-connect'),
  bowerFiles = require('main-bower-files');

var coffeeSrc = ['./src/**/*.coffee'],
  cjsxSrc = ['./src/**/*.cjsx'],
  jadeSrc = ['./src/**/*.jade'],
  sassSrc = ['.src/**/*.scss', '.src/**/*.sass'],
  stylusSrc = ['./src/**/*.styl'],
  htmlSrc = ['./dest/**/*.*'];

gulp.task('coffee', function () {
  gulp.src(coffeeSrc)
    .pipe(coffee({
      bare: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('./dest/js/'));
});

gulp.task('cjsx', function () {
  gulp.src(cjsxSrc)
    .pipe(cjsx({
        bare: true
      })
      .on('error', gutil.log))
    .pipe(gulp.dest('./dest/js/'));
});

gulp.task('jade', function () {
  var locals = {};
  gulp.src(jadeSrc)
    .pipe(jade({
      locals: locals
    }))
    .pipe(gulp.dest('./dest/'));
});

// gulp.task('sass', function () {
//   return sass(sassSrc)
//     .pipe(gulp.dest('./dest/css/'));
// });

gulp.task('stylus', function () {
  gulp.src(stylusSrc)
    .pipe(stylus())
    .pipe(gulp.dest('./dest/css/'));
});

gulp.task('html', function () {
  gulp.src(htmlSrc)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(coffeeSrc, ['coffee']);
  //gulp.watch(cjsxSrc, ['cjsx']);
  //gulp.watch(sassSrc, ['sass']);
  gulp.watch(jadeSrc, ['jade']);
  gulp.watch(stylusSrc, ['stylus']);
  gulp.watch(htmlSrc, ['html']);
});

gulp.task('bower', function () {
  return gulp.src(bowerFiles(), {
      base: './bower_components'
    })
    .pipe(gulp.dest('./dest/libs/'));
});

gulp.task('connect', function () {
  connect.server({
    root: './dest/',
    livereload: true
  });
});

gulp.task('default', ['html', 'coffee', 'jade', 'stylus', 'connect', 'watch']);
