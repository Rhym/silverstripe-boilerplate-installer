module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);

    grunt.initConfig({
        directories: {
            project: 'mysite',
            boilerplate: 'boilerplate',
            bower: 'components/lib'
        },
        pkg: grunt.file.readJSON('package.json')
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadTasks('build_tasks');
    grunt.registerTask('default',['watch']);
}