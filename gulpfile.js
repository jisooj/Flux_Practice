"use strict";

const gulp = require('gulp');
const connect = require('gulp-connect'); // runs a local dev server
const gulpOpen = require('gulp-open'); // open an URL in browser
const browserify = require('browserify'); // bundle JS
const reactify = require('reactify'); // converts JSX to JS
const source = require('vinyl-source-stream'); // use conventional text stream with gulp
const concat = require('gulp-concat'); // concats files
const del = require('del');

var config = {
	port: 9000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		css: [
			// './node_modules/bootstrap/dist/css/bootstrap.min.css',
			'./src/sample.css'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
};

// start a local dev server 
function connectToServer() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
}

function open() {
	gulp.src('dist/index.html').pipe(gulpOpen({
		uri: config.devBaseUrl + ':' + config.port + '/'
	}));
}

function clean() {
  return del([config.paths.dist + '/']);
}

function html() {
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.paths.dist))
	.pipe(connect.reload());
}

function css() {
	gulp.src(config.paths.css)
	.pipe(concat('bundle.css'))
	.pipe(gulp.dest(config.paths.dist + '/css'))
	.pipe(connect.reload());
}

function js() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle() // put all js files into a single js file
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
}

// execute whenever something changes in source files
function watchFiles() {
	gulp.watch(config.paths.html, html);
	gulp.watch(config.paths.js, js);
	gulp.watch(config.paths.css, css);
}

/*
Command gulp -> run html and open task
DEPENDENCY:
	connect -> open
	html 
	watch
*/
const build = gulp.series(
	// clean, 
	gulp.parallel(
		gulp.series(html, js, css), 
		gulp.series(connectToServer, open), 
		watchFiles
	)
);


// define gulp tasks here
exports.default = build;