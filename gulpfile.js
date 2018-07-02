var gulp = require('gulp');
var newer = require('gulp-newer');

var syncsource = '/data/data/com.termux/files/home/storage/downloads/html/learn247-gh-pages';
var syncdestination = '/data/data/com.termux/files/home/learn247-gh-pages';

gulp.task('sync', function() {
	return gulp.src(syncsource + '/**/*')
		.pipe(newer(syncdestination))
		.pipe(gulp.dest(syncdestination));
});

gulp.task('watch', function() {
	gulp.watch(syncsource + '/**/*', ['sync']);
});
