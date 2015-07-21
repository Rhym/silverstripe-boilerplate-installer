module.exports = function (grunt) {
  'use strict';

  var config = grunt.config;

  /** =========================================
   * Deploy
   ===========================================*/

  /** -----------------------------------------
   * Move Shit
   * ----------------------------------------*/

  config.set('copy.all', {
    files: [
    /**
     * SVGs
     */
      {
        cwd: '<%= directories.boilerplate %>/images/svg',
        src: '*',
        dest: '<%= directories.project %>/images/svg/src',
        expand: true
      },
    /**
     * Javascript
     */
      {
        cwd: '<%= directories.bower %>/modernizr/',
        src: 'modernizr.js',
        dest: '<%= directories.project %>/javascript/lib',
        expand: true
      },
      {
        cwd: '<%= directories.bower %>/html5shiv/dist/',
        src: 'html5shiv.min.js',
        dest: '<%= directories.project %>/javascript/lib',
        expand: true
      },
      {
        cwd: '<%= directories.bower %>/respond/dest/',
        src: 'respond.min.js',
        dest: '<%= directories.project %>/javascript/lib',
        expand: true
      }
    ]
  });

  /** -----------------------------------------
   * Deploy
   *
   * Run all tasks
   * ----------------------------------------*/

  grunt.registerTask('deploy', ['copy', 'browserify', 'uglify', 'svgmin', 'sass', 'autoprefixer', 'cmq', 'cssmin']);

};
