module.exports = function(grunt) {
    'use strict';

    var config = grunt.config;

    /** =========================================
     * Deploy
     ===========================================*/

    /** -----------------------------------------
     * Move Shivs
     -------------------------------------------*/

    config.set('copy.all', {
        files: [
            /**
             * Fonts
             */
            {
                cwd: '<%= directories.bower %>/components-font-awesome/fonts',
                src: '*',
                dest: '<%= directories.project %>/fonts',
                expand: true
            },
            /**
             * CSS
             */
            {
                cwd: '<%= directories.bower %>/components-font-awesome/css',
                src: 'font-awesome.min.css',
                dest: '<%= directories.project %>/css',
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
     -------------------------------------------*/

    grunt.registerTask('deploy',['copy', 'browserify', 'uglify', 'sass', 'autoprefixer', 'cmq', 'cssmin']);

};