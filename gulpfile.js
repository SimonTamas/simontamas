var gulp = require('gulp');
var ts = require('gulp-typescript');
var closureCompiler = require('gulp-closure-compiler');


gulp.task('default', function () {
    return gulp.src(['resources/assets/ts/*.ts','typings/index.d.ts'])
        .pipe(ts({
            allowJs: true,
            noImplicitAny: false,
            out: 'app.js'
        }))
        .pipe(gulp.dest('public/js'))
        .pipe(closureCompiler({
            compilerPath: 'java/compiler.jar',
            fileName: "app.js"
        }))
        .pipe(gulp.dest('public/js'));
});
