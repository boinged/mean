var concat = require('gulp-concat');
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
	gulp.src(['ng/module.js', 'ng/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(ngAnnotate())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'));
});


gulp.task('watch:js', ['js'], function() {
	gulp.watch('ng/**/*.js', ['js']);
});
