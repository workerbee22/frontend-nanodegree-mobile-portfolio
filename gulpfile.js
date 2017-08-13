// include gulp and all plugins
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var clean = require('gulp-clean');

// Lint Task
gulp.task('lint', function() {
  return gulp.src('views/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify js file
gulp.task('scripts', function() {
  return gulp.src('views/js/main.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('views/js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('views/js'));
});

gulp.task('clean', function () {
    return gulp.src('views/images', {read: false})
        .pipe(clean());
});

// create the smaller pizzeria-small.jpg file
gulp.task('imageSmall', function () {
  return gulp.src('views/images_src/pizzeria.jpg')
    .pipe(imageResize({
      width : 150
    }))
    .pipe(rename('pizzeria-small.jpg'))
    .pipe(gulp.dest('views/images_src'));
});
// create the larger pizzeria-large.jpg file
gulp.task('imageLarge', function () {
  return gulp.src('views/images_src/pizzeria.jpg')
    .pipe(imageResize({
      width : 1024
    }))
    .pipe(rename('pizzeria-large.jpg'))
    .pipe(gulp.dest('views/images_src'));
});

// optimise all images
gulp.task('imagemin', function() {
    return gulp.src('views/images_src/*')
      .pipe(imagemin())
      .pipe(gulp.dest('views/images'));
});

gulp.task('default', ['clean','lint', 'scripts', 'imageSmall', 'imageLarge', 'imagemin']);
