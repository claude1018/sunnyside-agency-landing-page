const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const jsFiles = 'domImports.js imagesImport.js hamburger.js windowChange.js';

function scripts() {
  return gulp
    .src(jsFiles.split(' ').map((dist) => './scripts/' + dist))
    .pipe(concat('app.js'))
    .pipe(
      babel({
        presets: [
          [
            '@babel/env',
            {
              modules: false,
            },
          ],
        ],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('./app/js/'));
}

function buildSass() {
  return gulp
    .src('./sass/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./app/css/'));
}

exports.scripts = scripts;
exports.buildSass = buildSass;
exports.watch = function () {
  gulp.watch('./sass/**/*.sass', gulp.series('buildSass'));
  gulp.watch('./scripts/*.js', gulp.series('scripts'));
};
