module.exports = function (grunt) {
    'use strict';

    var config = grunt.config;

    /** =========================================
     * Images
     ===========================================*/

    /** -----------------------------------------
     * SVG
     * ----------------------------------------*/

    config.set('svgmin.all', {
        options: {
            plugins: [
                {removeViewBox: false}
            ]
        },
        files: [{
            expand: true,
            cwd: '<%= directories.project %>/images/svg/src/',
            src: ['**/*.svg'],
            dest: '<%= directories.project %>/images/svg/'
        }]
    });

    /** =========================================
     * Watch
     ===========================================*/

    config.set('watch.svg', {
        files: ['<%= directories.project %>/images/svg/src/*.svg'],
        tasks: ['svgmin'],
        options: {
            spawn: false
        }
    });

};