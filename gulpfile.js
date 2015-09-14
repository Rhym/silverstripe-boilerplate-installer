/**
 *╔══════════════════════════════════════════════════════╗
 *║                                                      ║
 *║                 _      _        _ _                  ║
 *║                (_)    | |      (_) |                 ║
 *║      __ _ _   _ _  ___| | _____ _| |_   _____ _ __   ║
 *║     / _` | | | | |/ __| |/ / __| | \ \ / / _ \ '__|  ║
 *║    | (_| | |_| | | (__|   <\__ \ | |\ V /  __/ |     ║
 *║     \__, |\__,_|_|\___|_|\_\___/_|_| \_/ \___|_|     ║
 *║        | |                                           ║
 *║        |_|                                           ║
 *║                                                      ║
 *║       Author: Jaydn de Graaf                         ║
 *║       Email: jd@pinc.nz                              ║
 *║                                                      ║
 *╚══════════════════════════════════════════════════════╝
 */

/*jshint esnext: true */

'use strict';

var root          = './mysite/',
    app           = root + 'app/',
    dist          = root + 'dist/',
    prod          = false,
    sprites       = [app + '*/@1x/*.png'],
    retinasprites = [app + '*/@2x/*.png'],
    gulp          = require("gulp"),
    size          = require('gulp-size'),
    gulpif        = require("gulp-if"),
    gutil         = require("gulp-util"),
    chalk         = require("chalk");

//╔═══════════════════════════════╗
//║                               ║
//║   JAVASCRIPT FUNCTIONALITY    ║
//║                               ║
//╚═══════════════════════════════╝
var babel      = require("gulp-babel"),
    rename     = require("gulp-rename"),
    babelify   = require('babelify'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    uglify     = require("gulp-uglify"),
    watchify   = require("watchify"),
    notify     = require("gulp-notify"),
    bytediff   = require('gulp-bytediff'),
    jshint     = require("gulp-jshint");

function compileScripts(watch) {
  var props = watchify.args;
  props.entries = [app + 'js/components/app.js'];
  props.debug = true;

  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  bundler.transform(babelify);

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', function (error) {
      Message('error', 'red');
      gutil.log(chalk['red'](error.message));
    })
      .pipe(source('output.js'))
      .pipe(gulp.dest(dist + 'js'));
  }

  bundler.on('update', function () {
    rebundle();
    Message('js', 'green');
    gutil.log('Gulp.js:', gutil.colors.green('• Bundling all Javascript files with browserify'));
  });
  return rebundle();

}

/**
 *  Lint the JS application
 */

gulp.task('lint', function () {
  Message('lint', 'green');
  gutil.log('Gulp.js:', gutil.colors.green('• Linting Javascript Application'));
  var jsHintOptions = {
    lookup: true,
    esnext: true
  };
  return gulp.src(app + 'js/components/app.js').pipe(jshint(jsHintOptions)).pipe(jshint.reporter('jshint-stylish'))
});

/**
 *  Minify the JS output
 */

gulp.task('minify-js', function () {
  gutil.log('Gulp.js:', gutil.colors.green('• Minifying Javascript output'));
  return gulp.src([dist + 'js/output.js'])
    .pipe(bytediff.start()).pipe(uglify()).pipe(strip()).pipe(rename({extname: '.min.js'})).pipe(bytediff.stop()).pipe(gulp.dest(dist + 'js/'))
});

/**
 *  Minify the compiled CSS
 */

gulp.task('minify-css', ['sass'], function () {
  gutil.log('Gulp.js:', gutil.colors.green('• Minifying the CSS files'));
  return gulp.src([dist + 'styles/style.css']).pipe(bytediff.start()).pipe(strip()).pipe(minifyCss()).pipe(rename({extname: '.min.css'})).pipe(bytediff.stop()).pipe(gulp.dest(dist + 'styles/'))
});

//╔═══════════════════════════════╗
//║                               ║
//║    STYLESHEET MANIPLUATION    ║
//║                               ║
//╚═══════════════════════════════╝
var sass         = require('gulp-sass'),
    minifyCss    = require('gulp-cssmin'),
    order        = require("gulp-order"),
    concat       = require("gulp-concat"),
    cssmin       = require("gulp-cssmin"),
    plumber      = require("gulp-plumber"),
    sourcemaps   = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    strip        = require('gulp-strip-comments');

gulp.task('sass', function () {
  gutil.log('Gulp.js:', gutil.colors.green('• Compiling the combined stylesheets'));
  var autoprefixerSettings = {
    browsers: ['last 2 versions'],
    cascade : true
  };
  return gulp.src([app + 'styles/main.scss']).pipe(plumber()).pipe(sourcemaps.init()).pipe(order()).pipe(concat('style.scss')).pipe(gulpif(prod, sass({outputStyle: 'compressed'}), sass({outputStyle: 'nested'}))).on('error', sass.logError).pipe(autoprefixer(autoprefixerSettings)).pipe(gulpif(prod, cssmin())).pipe(sourcemaps.write('./')).pipe(plumber.stop()).pipe(gulp.dest(dist + 'styles'))
});

gulp.task('editor', function () {
  gutil.log('Gulp.js:', gutil.colors.green('• Compiling the combined stylesheets'));
  var autoprefixerSettings = {
    browsers: ['last 2 versions'],
    cascade : true
  };
  return gulp.src([app + 'styles/editor.scss']).pipe(plumber()).pipe(sourcemaps.init()).pipe(order()).pipe(concat('editor.scss')).pipe(gulpif(prod, sass({outputStyle: 'compressed'}), sass({outputStyle: 'nested'}))).on('error', sass.logError).pipe(autoprefixer(autoprefixerSettings)).pipe(gulpif(prod, cssmin())).pipe(sourcemaps.write('./')).pipe(plumber.stop()).pipe(gulp.dest(dist + 'styles'))
});

//╔═══════════════════════════════╗
//║                               ║
//║      SPRITESHEET CREATION     ║
//║                               ║
//╚═══════════════════════════════╝
var imagemin    = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    pngquant    = require('imagemin-pngquant');

gulp.task('sprites', function () {
  gutil.log('Gulp.js:', gutil.colors.green('• Creating the spritesheets and associated styles'));
  /**
   *  Standard Sprites
   */
  var spriteData = gulp.src(sprites).pipe(spritesmith({
    padding    : 4,
    imgName    : 'sprites.png',
    cssName    : '01-sprites.scss',
    cssTemplate: app + 'images/@1x/sprite_positions.styl.mustache'
  }));

  spriteData.img.pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}]
  })).pipe(gulp.dest(dist + 'images'));

  spriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

  /**
   *  Retina Sprites
   */
  var retinaSpriteData = gulp.src(retinasprites).pipe(spritesmith({
    padding    : 8,
    imgName    : 'sprites-retina.png',
    cssName    : '02-sprites-retina.scss',
    cssTemplate: app + 'images/@2x/retina-sprite_positions.styl.mustache'
  }));

  retinaSpriteData.img.pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}]
  })).pipe(gulp.dest(dist + 'images'));

  retinaSpriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

});

/**
 *  SVG Optimisation
 */
var svgmin = require('gulp-svgmin');

gulp.task('svg', function () {
  gutil.log('Gulp.js:', gutil.colors.green('• Optimising all of the projects SVG files'));
  return gulp.src(app + 'images/svg/src/*.svg').pipe(svgmin({options: {plugins: [{removeViewBox: false}]}})).pipe(gulp.dest(app + 'images/svg/'));
});

/**
 *  IE8 Stylesheet fixer
 */

var rework    = require('gulp-rework'),
    queryless = require('css-queryless');

gulp.task('ie', function () {
  gutil.log('Gulp.js:', gutil.colors.green('• Making IE safe stylesheet'));
  var keepmatches = [
    'screen and (min-width: 768px)',
    'screen and (min-width: 1024px)'
  ];

  gulp.src([dist + 'styles/style.css']).pipe(rework(queryless(keepmatches))).pipe(rename({suffix: '.ie'})).pipe(gulp.dest(dist + 'styles/'))
});


gulp.task('start', function () {
  Message('start', 'green');
});

//╔═══════════════════════════════╗
//║                               ║
//║        TASK DECLARATION       ║
//║                               ║
//╚═══════════════════════════════╝

var gulpSequence = require('gulp-sequence');

var changeEvent = function (evt) {
  gutil.log('File', chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')), 'was', chalk['blue'](evt.type));
};

gulp.task('finishing', function () {

  Message('scss', 'green');
  Message('js', 'green');
  Message('checklist', 'green');
});

gulp.task('default', ['start', 'sprites', 'editor', 'sass', 'svg', 'ie'], function () {

  compileScripts(true);

  gulp.watch([app + 'styles/**/*.scss'], ['sass']).on('change', function (evt) {
    changeEvent(evt);
  });

  gulp.watch([app + 'js/components/app.js'], ['lint']).on('change', function (evt) {
    changeEvent(evt);
  });

});

gulp.task('deploy', function (cb) {
  compileScripts(false);
  gulpSequence(['start'], ['sprites'], ['sass'], ['editor'], ['svg'], ['ie'], ['minify-css'], ['minify-js'], ['finishing'])(cb);

});

gulp.task('js', function (cb) {
  compileScripts(false);
});

function Message(message, col) {
  var color = (col != undefined) ? col : 'yellow';
  gutil.log(chalk[color](Messages[message]));
}

var Messages = {
  start    : ' ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗███████╗██╗██╗    ██╗   ██╗███████╗██████╗\n           ██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝██╔════╝██║██║    ██║   ██║██╔════╝██╔══██╗\n           ██║   ██║██║   ██║██║██║     █████╔╝ ███████╗██║██║    ██║   ██║█████╗  ██████╔╝\n           ██║▄▄ ██║██║   ██║██║██║     ██╔═██╗ ╚════██║██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗\n           ╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗███████║██║███████╗╚████╔╝ ███████╗██║  ██║\n            ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝',
  scss     : '╔═══════════════════════════╗\n           ║ Sass compiled Succesfully ║\n           ╚═══════════════════════════╝',
  js       : '╔════════════════════════╗\n           ║ JS bundled Succesfully ║\n           ╚════════════════════════╝',
  error    : '╔═══════════════════════╗\n           ║ An error has occurred ║\n           ╚═══════════════════════╝',
  lint     : '╔════════════╗\n           ║ JS Linting ║\n           ╚════════════╝',
  checklist: '╔═══════════════════╗\n           ║ Go live checklist ║\n           ╚═══════════════════╝\n           ☑ External font\'s have been included\n           ☑ Favicons have been generated and included\n           ☑ Analytics software is monitoring site\n           ☑ JavaScript files are minified\n           ☑ CSS files are minified\n           ☑ All images have alt tag values\n           ☑ !important is avoided\n           ☑ No base files have been overwritten\n           ☑ 404 Page has been styled\n           ☑ Common meta tags\n           ☑ Autoprefixer'
};
