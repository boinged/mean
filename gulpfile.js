var fs = require('fs');
var gulp = require('gulp');

fs.readdirSync(__dirname + '/gulp')
  .forEach(function(task) {
    require('./gulp/' + task);
  });

gulp.task('watch:js', ['js'], function() {
  gulp.watch('ng/**/*.js', ['js']);
});

gulp.task('watch:css', function() {
  gulp.watch('css/**/*.styl', ['css']);
});

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server']);