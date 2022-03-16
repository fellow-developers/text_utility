const gulp = require("gulp");
// const uglify = require('gulp-uglify');
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const tsProject = ts.createProject("tsconfig.json");

// const browserify = require("browserify");
// const source = require("vinyl-source-stream");
// const tsify = require("tsify");


/**
 * Transpile typescript to javascript
 * @param cb: gulp task callback
 */
 function buildTypescript(cb) {
    //  TODO: Add uglify and prevent to generate d.ts
//  https://www.typescriptlang.org/docs/handbook/gulp.html#browserify
//   const result = browserify({
//     basedir: ".",
//     debug: true,
//     entries: ["./ts/demo.ts"],
//     cache: {},
//     packageCache: {},
//   })
//     .plugin(tsify)
//     .bundle()
//     .pipe(source("index.js"))
//     .pipe(gulp.dest("./static/js"));
  const result = gulp
  .src('./ts/**/*.ts')
  .pipe(sourcemaps.init())
  .pipe(tsProject())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./static/js'));
  cb();
  return result;
}



/**
 * Transpile scss to css
 * @param  cb gulp callback
 */
 function buildScss(cb) {
  const result = gulp
    .src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/css'));
  cb();
  return result;
}


gulp.task('default', gulp.parallel( buildTypescript, buildScss),
);

gulp.task('watch', function(){
  gulp.watch('./ts/**/*.ts',buildTypescript);
  gulp.watch('./scss/**/*.scss',buildScss);
});