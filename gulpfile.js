var gulp 			= require('gulp'),
	less 			= require('gulp-less'),
	concatFiles 	= require('gulp-concat'),
	webserver 		= require('gulp-webserver'),
    livereload 		= require('gulp-livereload');

var paths = {
	html: '**/*.html',
	css: {
		src: 'assets/css/',
		dist: 'assets/css/dist/'
	},
	js: {
		src: 'assets/js/',
		components: 'assets/js/components',
		vendor: 'assets/js/vendor/',
		dist: 'assets/js/dist/'
	},
	bower: {
		materialize: {
			js: 'bower_components/Materialize/dist/js/materialize.min.js'
		},
		jquery: 'bower_components/jquery/dist/jquery.min.js'
	}
};

gulp.task('webserver', function() {
	gulp.src('./')
	.pipe(webserver({
		directoryListing: false,
		open: true,
		port: 1515,
		livereload: true
	}));
});

gulp.task('less', function() {
	gulp.src(paths.css.src + 'main.less')
    .pipe(less())
    .pipe(gulp.dest(paths.css.dist))
    .pipe(livereload({port: 35728}));
});

gulp.task('js', function() {
	var sources = [
		paths.bower.jquery,
		paths.bower.materialize.js,
		paths.js.vendor + '*.js',
		paths.js.components + '**/*.js',
		paths.js.src + 'init.js'
	];

	gulp.src(sources)
	.pipe(concatFiles('main.js'))
    .pipe(gulp.dest(paths.js.dist))
    .pipe(livereload({port: 35728}));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(paths.css.src + '**/*.less', ['less']);
	gulp.watch(paths.js.src + '*.js', ['js']);
	gulp.watch(paths.html, ['default']);
});

gulp.task('default', ['less', 'js','webserver', 'watch']);