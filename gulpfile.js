/*jslint node: true */
"use strict";

var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    babel = require('gulp-babel'),
    gulpCopy = require('gulp-copy'),
    path = require('path');

var buildPath = 'build';
var srcPath = 'src';
var ecmaScriptFiles = [
    './'+srcPath+'/*.js',
    './'+srcPath+'/**/*.js'
];
var filesToCopy = [
    './'+srcPath+'/**/*.jade',
    './'+srcPath+'/public/*.*',
    './'+srcPath+'/public/**/*.*',
    './'+srcPath+'/**/*.yml'
];

gulp.task('buildEcmaScriptFiles', function() {
    return gulp.src(ecmaScriptFiles)
        .pipe(babel())
        .pipe(gulp.dest(buildPath));
});

gulp.task('copyAssets', function() {
    return gulp.src(filesToCopy)
        .pipe(gulpCopy(buildPath, {prefix: 1}));
});

gulp.task('serve', ['buildEcmaScriptFiles', 'copyAssets'], function() {
    var server = gls.new('./bin/www');
    server.start();
    gulp.watch(filesToCopy, ['copyAssets']);
    gulp.watch(ecmaScriptFiles, ['buildEcmaScriptFiles', server.start]);
});
