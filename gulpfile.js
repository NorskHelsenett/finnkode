"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const del = require("del");
const gulp = require("gulp");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack");
const webpackconfig = require("./webpack.config.js");
const webpackstream = require("webpack-stream");
const spawn = process.platform === "win32" ? require("win-spawn") : require("child_process").spawn;

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 4000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Clean assets
function clean() {
    return del(["./dist/assets/"]);
}

// CSS task
function css() {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(gulp.dest("./dist/assets/css/"))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./dist/assets/css/"))
        .pipe(browsersync.stream());
}

// Transpile, concatenate and minify scripts
function scripts() {
    return (
        gulp
            .src(["./src/js/**/*"])
            .pipe(plumber())
            .pipe(webpackstream(webpackconfig, webpack))
            // folder only, filename is specified in webpack config
            .pipe(gulp.dest("./dist/assets/js/"))
            .pipe(browsersync.stream())
    );
}

// Jekyll
function jekyll() {
    return cp.spawn("jekyll.bat", ["build", "--watch", "--incremental"], {stdio: "inherit"});
}


// Watch files
function watchFiles() {
    gulp.watch("./src/scss/**/*", css);
    gulp.watch("./src/js/**/*", scripts);
    gulp.watch("./src/jekyll/**/*", gulp.series(jekyll, browserSyncReload));
}

const build = gulp.series(clean, gulp.parallel(css, jekyll, scripts));

const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.scripts = scripts;
exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;