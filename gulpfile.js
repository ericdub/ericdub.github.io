// grab our packages
var gulp   = require('gulp');
var  uglify = require('gulp-uglify');
var  cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

// define the default task and add the minify task to it
gulp.task('default', ['compress','minify-css']);

gulp.task('compress', function() {
  
  return gulp.src('dev-assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
	
});
gulp.task('minify-css', function() {
  return gulp.src('dev-assets/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css'));
});


