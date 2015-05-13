module.exports = function(grunt) {
    'use strict';

    var config = grunt.config;

    /** =========================================
     * CSS
     ===========================================*/

    /** -----------------------------------------
     * Sass
     -------------------------------------------*/

    config.set('sass.dist', {
        files:[{
            '<%= directories.project %>/css/main.css': '<%= directories.project %>/scss/main.scss'
        }]
    });

    config.set('sass.cms', {
        files:[{
            '<%= directories.cmsBranding %>/css/main.css': '<%= directories.cmsBranding %>/scss/main.scss'
        }]
    });

    config.set( 'sass.editor', {
        files:[{
            '<%= directories.project %>/css/editor.css': '<%= directories.project %>/scss/editor.scss'
        }]
    });

    /** -----------------------------------------
     * Autoprefixer
     -------------------------------------------*/

    config.set( 'autoprefixer.dist', {
        options: {
            browsers: ['last 3 versions']
        },
        files:[{
            '<%= directories.project %>/css/main.css': '<%= directories.project %>/css/main.css'
        }]
    });

    config.set( 'autoprefixer.cms', {
        options: {
            browsers: ['last 3 versions']
        },
        files:[{
            '<%= directories.cmsBranding %>/css/main.css': '<%= directories.cmsBranding %>/css/main.css'
        }]
    });

    config.set( 'autoprefixer.editor', {
        options: {
            browsers: ['last 3 versions']
        },
        files:[{
            '<%= directories.project %>/css/editor.css': '<%= directories.project %>/css/editor.css'
        }]
    });

    /** -----------------------------------------
     * Combine Media Queries
     -------------------------------------------*/

    config.set( 'cmq.dist', {
        options: {
            log: false
        },
        files:[{
            '<%= directories.project %>/css/': ['<%= directories.project %>/css/main.css']
        }]
    });

    config.set( 'cmq.cms', {
        options: {
            log: false
        },
        files:[{
            '<%= directories.cmsBranding %>/css/': ['<%= directories.cmsBranding %>/css/main.css']
        }]
    });

    /** -----------------------------------------
     * CSSMin
     -------------------------------------------*/

    config.set( 'cssmin.dist', {
        options: {
            rebase: false
        },
        expand: true,
        cwd: '<%= directories.project %>/css/',
        src: ['main.css'],
        dest: '<%= directories.project %>/css/',
        ext: '.min.css'
    });

    config.set( 'cssmin.cms', {
        options: {
            rebase: false
        },
        expand: true,
        cwd: '<%= directories.cmsBranding %>/css/',
        src: ['main.css'],
        dest: '<%= directories.cmsBranding %>/css/',
        ext: '.min.css'
    });

    /** -----------------------------------------
     * CSSLint
     -------------------------------------------*/

    config.set( 'csslint.strict', {
        options: {
            import: 2
        },
        src: ['<%= directories.project %>/css/main.min.css']
    });

    config.set( 'csslint.lax', {
        options: {
            import: false
        },
        src: ['<%= directories.project %>/css/main.min.css']
    });

    /** =========================================
     * Watch
     ===========================================*/

    config.set('watch.sass', {
        files: ['<%= directories.project %>/scss/**/*.scss'],
        tasks: ['sass:dist', 'autoprefixer:dist', 'cmq:dist', 'cssmin:dist'],
        options: {
            spawn: false
        }
    });

    config.set('watch.editor', {
        files: ['<%= directories.project %>/scss/editor.scss'],
        tasks: ['sass:editor', 'autoprefixer:editor'],
        options: {
            spawn: false
        }
    });

    config.set('watch.boilerplate', {
        files: ['<%= directories.boilerplate %>/scss/**/*.scss'],
        tasks: ['sass:dist', 'autoprefixer:dist', 'cmq:dist', 'cssmin:dist'],
        options: {
            spawn: false
        }
    });

    config.set('watch.cms', {
        files: ['<%= directories.cmsBranding %>/scss/**/*.scss'],
        tasks: ['sass:cms', 'autoprefixer:cms', 'cmq:cms', 'cssmin:cms'],
        options: {
            spawn: false
        }
    });

};