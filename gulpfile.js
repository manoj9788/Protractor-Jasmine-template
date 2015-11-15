var protractor = require("gulp-protractor").protractor;

gulp.src(["./specs/*.spec"])
    .pipe(protractor({
        configFile: "protractor-conf.js",
    }))
    .on('error', function(e) { throw e })