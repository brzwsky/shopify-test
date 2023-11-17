const gulp = require('gulp')

const fileInclude = require('gulp-file-include')

const scss = require('gulp-sass')(require('sass'))

const fileIncludeSetting = {
  prefix: '@@',
  basepath: '@file',
}

gulp.task('includeFiles', () => {
  return gulp
    .src('./src/*.html')
    .pipe(fileInclude(fileIncludeSetting))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('scss', () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./dist/css'))
})
