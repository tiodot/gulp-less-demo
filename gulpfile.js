var lessc = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var less = require('less');
 
gulp.task('less', function () {
  return gulp.src('./less/index.less')
    .pipe(lessc())
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
    gulp.watch('./less/*.less', function (files) {
        const fileManagers = less.environment && less.environment.fileManagers || [];
        fileManagers.forEach(function (fileManager) {
            if (fileManager.contents) {
                // clear the cache file;
                fileManager.contents = {};
            }
        });
        
        gulp.start('less');
    });
});

gulp.task('default', ['less', 'watch']);