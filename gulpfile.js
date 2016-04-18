
var gulp = require('gulp');
var gp = require('gulp-protractor');

gulp.task('webdriver-update', gp.webdriver_update);

// Setting up the test task
gulp.task('run-all', function(done) {
    gulp.src(['specs/*Spec.js']).pipe(gp.protractor({
        configFile: 'protractor-conf.js'
    })).on('error', function(e) {
        console.log(e)
    }).on('end', done);
});