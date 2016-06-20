var gulp 			= require('gulp'),
	less 			= require('gulp-less'),
	concatFiles 	= require('gulp-concat'),
	webserver 		= require('gulp-webserver'),
    livereload 		= require('gulp-livereload'),
    cssmin 			= require('gulp-cssmin'),
    uglify 			= require('gulp-uglify');

var paths = {
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
		jquery: 'bower_components/jquery/dist/jquery.min.js',
		materialize: {
			js: 'bower_components/Materialize/dist/js/materialize.min.js'
		},
		wow: 'bower_components/wow/dist/wow.min.js',
		youtubeAPI: 'bower_components/youtubeBackground/src/jquery.youtubebackground.js'
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
    .pipe(cssmin({ keepSpecialComments: 0 }))
    .pipe(gulp.dest(paths.css.dist))
    .pipe(livereload({port: 35728}));
});

gulp.task('js', function() {
	var sources = [
		paths.bower.jquery,
		paths.bower.materialize.js,
		paths.bower.youtubeAPI,
		paths.bower.wow,
		paths.js.vendor + '*.js',
		paths.js.components + '**/*.js',
		paths.js.src + 'init.js'
	];

	gulp.src(sources)
	.pipe(concatFiles('main.min.js'))
	.pipe(uglify())
    .pipe(gulp.dest(paths.js.dist))
    .pipe(livereload({port: 35728}));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(paths.css.src + '**/*.less', ['less']);
	gulp.watch([paths.js.src + '**/*.js', '!' + paths.js.dist + '*.js'], ['js']);
});

gulp.task('default', ['less', 'js','webserver', 'watch']);