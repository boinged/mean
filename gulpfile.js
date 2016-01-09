var fs = require('fs');
var gulp = require('gulp');

fs.readdirSync(__dirname + '/gulp')
	.forEach(function(task) {
		require('./gulp/' + task);
	});

gulp.task('build', ['js', 'css']);
gulp.task('watch', ['watch:js', 'watch:css']);
gulp.task('dev', ['watch', 'dev:server']);
