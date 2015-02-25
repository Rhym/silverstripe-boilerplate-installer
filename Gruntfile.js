module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'mysite/css/main.css': 'mysite/scss/main.scss'
                }
            },
            boilerplate: {
                files: {
                    'boilerplate/css/main.css': 'boilerplate/scss/main.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            dist: {
                files: {
                    'mysite/css/main.css': 'mysite/css/main.css'
                }
            },
            boilerplate: {
                files: {
                    'boilerplate/css/main.css': 'boilerplate/css/main.css'
                }
            }
        },
        cmq: {
            options: {
                log: false
            },
            dist: {
                files: {
                    'mysite/css/': ['mysite/css/main.css']
                }
            },
            boilerplate: {
                files: {
                    'boilerplate/css/': ['boilerplate/css/main.css']
                }
            }
        },
        cssmin: {
            dist: {
                expand: true,
                cwd: 'mysite/css/',
                src: ['main.css'],
                dest: 'mysite/css/',
                ext: '.min.css'
            },
            boilerplate: {
                expand: true,
                cwd: 'boilerplate/css/',
                src: ['main.css'],
                dest: 'boilerplate/css/',
                ext: '.min.css'
            }
        },
        watch: {
            dist: {
                files: ['mysite/scss/**/*.scss'],
                tasks: ['sass:dist', 'autoprefixer:dist', 'cmq:dist', 'cssmin:dist'],
                options: {
                    spawn: false
                }
            },
            boilerplate: {
                files: ['boilerplate/scss/**/*.scss'],
                tasks: ['sass:boilerplate', 'autoprefixer:boilerplate', 'cmq:boilerplate', 'cssmin:boilerplate'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.registerTask('default',['watch:dist', 'autoprefixer:dist', 'cmq:dist', 'cssmin:dist', 'watch:dist']);
    grunt.registerTask('boilerplate',['watch:boilerplate', 'autoprefixer:boilerplate', 'cmq:boilerplate', 'cssmin:boilerplate', 'watch:boilerplate']);
    grunt.registerTask('cms',['watch:cms', 'autoprefixer:cms', 'watch:cms']);
}