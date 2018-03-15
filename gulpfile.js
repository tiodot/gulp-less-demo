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
    gulp.watch('./less/*.less', function (event) {
        const fileManagers = less.environment && less.environment.fileManagers || [];
        fileManagers.forEach(function (fileManager) {
            if (fileManager.contents && fileManager.contents[event.path]) {
                // clear the changed file cache;
                fileManager.contents[event.path] = null;
            }
        });
        
        gulp.start('less');
    });
});

gulp.task('default', ['less', 'watch']);