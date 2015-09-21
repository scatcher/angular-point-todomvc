var gulp = require('gulp');
var webserver = require('gulp-webserver');
var useref = require('gulp-useref');

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            //directoryListing: true,
            open: true
        }));
});

gulp.task('useref', function () {
    var assets = useref.assets();

    return gulp.src('index.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('build', ['useref', 'html']);