var gulp = require('gulp');
var webserver = require('gulp-webserver');
var useref = require('gulp-useref');
var ghPages = require('gulp-gh-pages');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');


gulp.task('serve', function() {
    return gulp.src('.')
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
        .pipe(gulpif('*.js', sourcemaps.init({ loadMaps: true })))
        .pipe(assets.restore())
        .pipe(sourcemaps.write('.'))
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
    return gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('build', ['useref', 'html']);

gulp.task('copy-demo', ['build'], function() {
    return gulp.src('./dist/**/**.*')
        .pipe(gulp.dest('./demo'));

});
gulp.task('build-demo', ['copy-demo', 'offline-scripts'], function() {
    return gulp.src('./dist/**/**.*')
        .pipe(gulp.dest('./demo'));

});

gulp.task('offline-scripts', function() {
    return gulp.src([
            'offline/apCachedXML.js',
            'bower_components/angular-point/test/mock/apMockBackend.mock.js',
            'bower_components/angular-mocks/angular-mocks.js'
        ])
        .pipe(concat('offline.js'))
        .pipe(gulp.dest('./demo/'));
});

gulp.task('inject-demo-scripts', ['build-demo'], function(){
    return gulp.src(['demo/index.html'])
        .pipe(replace('<!--DEMO-BUILD-SCRIPTS-->', '<script src="offline.js"></script>'))
        .pipe(gulp.dest('demo/'));
});

/** Deploy to gh-pages branch */
gulp.task('deploy-demo', ['inject-demo-scripts'], function(){
    return gulp.src('./demo/**/*')
        .pipe(ghPages());
});