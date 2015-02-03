module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'boilerplate/css/main.css': 'boilerplate/sass/main.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            dist: {
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
                    'boilerplate/css/': ['boilerplate/css/main.css']
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'boilerplate/css/',
                src: ['main.css'],
                dest: 'boilerplate/css/',
                ext: '.min.css'
            }
        },
        watch: {
            dist: {
                files: ['boilerplate/sass/**/*.scss'],
                tasks: ['sass:dist', 'autoprefixer:dist', 'cmq:dist', 'cssmin'],
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
    grunt.registerTask('default',['watch:dist', 'autoprefixer:dist', 'cmq:dist', 'cssmin', 'watch']);
    grunt.registerTask('cms',['watch:cms', 'autoprefixer:cms', 'watch:cms']);
}