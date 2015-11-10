module.exports = function (grunt) {
  'use strict';

  var config = grunt.config;

  /** =========================================
   * CSS
   ===========================================*/

  /** -----------------------------------------
   * Sass
   -------------------------------------------*/

  config.set('sass.dist', {
    files: [{
      '<%= directories.project %>/css/main.css': '<%= directories.project %>/scss/main.scss'
    }]
  });

  config.set('sass.editor', {
    files: [{
      '<%= directories.project %>/css/editor.css': '<%= directories.project %>/scss/editor.scss'
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
    dist: {
      files: {
        '<%= directories.project %>/css/main.css': ['<%= directories.project %>/css/main.css']
      }
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

  config.set('watch.sass', {
    files: ['<%= directories.project %>/scss/**/*.scss'],
    tasks: ['sass:dist', 'cmq', 'postcss'],
    options: {
      spawn: false
    }
  });

  config.set('watch.editor', {
    files: ['<%= directories.project %>/scss/editor.scss'],
    tasks: ['sass:editor'],
    options: {
      spawn: false
    }
  });

  config.set('watch.boilerplate', {
    files: ['<%= directories.boilerplate %>/scss/**/*.scss'],
    tasks: ['sass:dist'],
    options: {
      spawn: false
    }
  });

};
