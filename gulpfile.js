'use strict';
const path = require('path');
const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');
const importOnce = require('node-sass-import-once');
const stylemod = require('gulp-style-modules');
const browserSync = require('browser-sync').create();
const gulpif = require('gulp-if');
const combiner = require('stream-combiner2');
const bump = require('gulp-bump');
const sassdoc = require('sassdoc');
const fs = require('fs');
const argv = require('yargs').argv

const sassOptions = {
  importer: importOnce,
  importOnce: {
    index: true,
    bower: true
  }
};

gulp.task('clean', function() {
  return gulp.src(['css'], {
    read: false
  }).pipe($.clean());
});

function buildCSS(){
  return combiner.obj([
    $.sass(sassOptions).on('error', $.sass.logError),
    $.autoprefixer({
      browsers: ['last 2 versions', 'Safari 8.0'],
      cascade: false
    }),
    gulpif(!argv.debug, $.cssmin())
  ]);
}

gulp.task('sass', function() {
  return gulp.src(['./sass/*-demo.scss'])
    .pipe(buildCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('watch', function() {
  gulp.watch(['_*.scss', 'sass/*-demo.scss'], ['sass']);
});

gulp.task('serve', function() {
  browserSync.init({
    port: 8080,
    notify: false,
    reloadOnRestart: true,
    logPrefix: `${pkg.name}`,
    https: false,
    files: ['*.*'],
    server: ['./', 'bower_components'],
  });

  gulp.watch(['*.html']).on('change', browserSync.reload);
  gulp.watch(['_*.scss', 'sass/*-demo.scss'], ['sass']);

});

gulp.task('bump:patch', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'patch'}))
  .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'minor'}))
  .pipe(gulp.dest('./'));
});

gulp.task('bump:major', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({type:'major'}))
  .pipe(gulp.dest('./'));
});

gulp.task('default', function(callback) {
  gulpSequence('clean', 'sass')(callback);
});

/**
* Special task just for Sass design repos. Builds the Sassdoc documentation and
* spits it out as `sassdoc.json`.
*/
gulp.task('sassdoc', function(){
  gulp.src(['./*.scss'])
    .pipe(sassdoc.parse())
    .on('data', function(data){
      fs.writeFileSync('sassdoc.json', JSON.stringify(data,null,4));
    });
});
