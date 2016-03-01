////////////////////////////////////////////////
// Required
////////////////////////////////////////////////

var gulp = require("gulp"),
	uglify = require('gulp-uglify'),
	uglifycss = require('gulp-uglifycss'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	nodemon = require('gulp-nodemon'),
	jade = require('gulp-jade');

////////////////////////////////////////////////
// Scripts Task
////////////////////////////////////////////////
gulp.task("sass", function(){
	gulp.src('./precompile/sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglifycss())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('./client/assets/css'))
		.pipe(reload({stream:true}));
});

gulp.task("jade", function(){
	gulp.src("./precompile/*.jade")
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest("./client/"))
	.pipe(reload({stream:true}));
})

gulp.task("partials", function(){
	gulp.src("./precompile/partials/**/*.jade")
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest("./client/partials/"))
	.pipe(reload({stream:true}));
	})

////////////////////////////////////////////////
// HTML Task
////////////////////////////////////////////////
gulp.task('html', function(){
	gulp.src('./*.html')
		.pipe(reload({stream:true}));
})

////////////////////////////////////////////////
// Uglify Javascript
////////////////////////////////////////////////

gulp.task("javascripts", function(){
	gulp.src('./clients/assets/js/**/*.js')
		.pipe(plumber())
		.pipe(reload({stream:true}))
	})

////////////////////////////////////////////////
// Browser-Sync Task
////////////////////////////////////////////////
gulp.task('browser-sync', ['nodemon'], function(){
	browserSync.init(null, {
		proxy: "http://localhost:8000",
		files: ["./client/"],
		browser: "google chrome",
		port: 7000,
	});
})

////////////////////////////////////////////////
// Run Nodemon
////////////////////////////////////////////////
gulp.task('nodemon', function(cb){
	var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function(){
		if(!started) {
			cb();
			started = true;
		}
	})
})
////////////////////////////////////////////////
// Watch Task
////////////////////////////////////////////////
gulp.task("watch", function(){
	gulp.watch('./precompile/sass/**/*.sass', ["sass"])
	gulp.watch('./precompile/*.jade', ["jade"])
	gulp.watch('./precompile/partials/**/*.jade', ["partials"])
	gulp.watch('./*.html', ["html"]);

})
////////////////////////////////////////////////
// Default Task
////////////////////////////////////////////////
gulp.task("default", ["sass","browser-sync", "jade", "partials", "watch"]);
