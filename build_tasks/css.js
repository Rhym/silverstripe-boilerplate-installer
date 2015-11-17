module.exports = function (grunt) {
  'use strict';

  var config = grunt.config;

  /** =========================================
   * CSS
   ===========================================*/

  /** -----------------------------------------
   * Sass
   -------------------------------------------*/

  config.set('sass.all', {
    files: [{
      '<%= directories.project %>/css/main.css': '<%= directories.project %>/scss/main.scss'
    }]
  });

  /** -----------------------------------------
   * Combine Media Queries
   -------------------------------------------*/

  config.set('cmq', {
    options: {
      log: false
    },
    dist: {
      files: {
        '<%= directories.project %>/css': ['<%= directories.project %>/css/main.css']
      }
    }
  });

  /** -----------------------------------------
   * PostCSS
   * ----------------------------------------*/

  config.set('postcss', {
    options: {
      map: true,
      processors: [
        require('pixrem')(),
        require('autoprefixer')({
          browsers: 'last 3 versions'
        }),
        require('cssnano')()
      ]
    },
    single_file: {
      src: '<%= directories.project %>/css/main.css',
      dest: '<%= directories.project %>/css/main.min.css'
    }
  });


  /** -----------------------------------------
   * CSSLint
   -------------------------------------------*/

  config.set('csslint.strict', {
    options: {
      import: 2
    },
    src: ['<%= directories.project %>/css/*.css']
  });

  config.set('csslint.lax', {
    options: {
      import: false
    },
    src: ['<%= directories.project %>/css/*.css']
  });

  /** =========================================
   * Watch
   ===========================================*/

  config.set('watch', {
    files: ['<%= directories.project %>/scss/**/*.scss'],
    tasks: ['sass', 'cmq', 'postcss'],
    options: {
      spawn: false
    }
  });

  grunt.registerTask('css', ['sass', 'cmq', 'postcss']);

};
