'use strict'

var path = require('path')
var gulp = require('gulp')
var del = require('del')
var stylus = require('gulp-stylus')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var wrap = require('gulp-wrap')
var replace = require('gulp-replace')
var uglify = require('gulp-uglify')

var myPath = {
	src: './src/',
	dest: './dist/',
}

gulp.task('default', ['clean'], function () {
	gulp.start('js')
	gulp.start('css')
})

gulp.task('clean', function () {
	del(path.join(myPath.dest, '*.*'))
})

gulp.task('js', function() {
	gulp.src(path.join(myPath.src, 'sample.js'))
		.pipe(wrap({src: path.join(myPath.src, '_wrapper/umd.ejs')}))
		.pipe(replace(/\{sample}/g, 'sample'))
		.pipe(replace(/\/\*\* DEBUG_INFO_START \*\*\//g, '/*'))
		.pipe(replace(/\/\*\* DEBUG_INFO_END \*\*\//g, '*/'))
		.pipe(rename('sample.umd.js'))
		.pipe(gulp.dest(myPath.dest))
		.pipe(uglify({
			preserveComments: 'some'
		}))
		.pipe(rename('sample.umd.min.js'))
		.pipe(gulp.dest(myPath.dest))
})

gulp.task('css', function() {
	gulp.src(path.join(myPath.src, '_wrapper/css.styl'))
		.pipe(stylus({
			linenos: false,
			compress: false,
			errors: true
		}))
		.pipe(rename('sample.css'))
		.pipe(gulp.dest(myPath.dest))
})
