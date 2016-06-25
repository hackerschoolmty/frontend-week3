var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minify = require('gulp-minify');
var watch = require('gulp-watch');

gulp.task('build', function(){
  gulp.src('./js/index.js')
    .pipe(browserify())
    .pipe(minify())
    .pipe(gulp.dest('./build'));
});


gulp.task('watch', function(){
  return watch('./js/**/*.js', function(){
    gulp.start('build');
  })
});
