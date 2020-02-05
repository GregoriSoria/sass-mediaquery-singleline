const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const notifier = require('node-notifier');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');

const src_folder = 'tests/';

gulp.task('serve', () => {
  return browserSync.init({
    server: {
      baseDir: [ 'tests' ]
    },
    port: 3000,
    open: false
  });
});

gulp.task('watch', () => {
  gulp.watch([`tests/**/*.html`], gulp.series('html')).on('change', () => {
    notifier.notify({
      title: 'HTML changed',
      message: 'HTML changed successfully!',
    });
    browserSync.reload;
  });
  gulp.watch([`tests/**/*.scss`], gulp.series('scss')).on('change', () => {
    notifier.notify({
      title: 'SCSS changed',
      message: 'SCSS changed successfully!',
    });
    browserSync.reload;
  });
});

gulp.task('html', () => {
  return gulp.src([ `${src_folder}**/*.html` ], {
    base: src_folder,
    since: gulp.lastRun('html')
  })
    .pipe(browserSync.stream());
});

gulp.task('scss', () => {
  return gulp
    .src([`${src_folder}**/*.scss`])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({
        level: {
            2: {
                all: true,
            }
        }
    }))
    .pipe(gulp.dest(src_folder))
    .pipe(browserSync.stream());
});

gulp.task('tests', gulp.series('scss', gulp.parallel('serve', 'watch')));

return;
