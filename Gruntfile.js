module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'mysite/css/main.css': 'mysite/scss/main.scss'
                }
            },
            cms: {
                files: {
                    'cms-branding/css/main.css': 'cms-branding/scss/main.scss'
                }
            },
            editor: {
                files: {
                    'mysite/css/editor.css': 'mysite/scss/editor.scss'
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
            cms: {
                files: {
                    'cms-branding/css/main.css': 'cms-branding/css/main.css'
                }
            },
            editor: {
                files: {
                    'mysite/css/editor.css': 'mysite/css/editor.css'
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
            cms: {
                files: {
                    'cms-branding/css/': ['cms-branding/css/main.css']
                }
            }
        },
        cssmin: {
            options: {
                rebase: false
            },
            dist: {
                expand: true,
                cwd: 'mysite/css/',
                src: ['main.css'],
                dest: 'mysite/css/',
                ext: '.min.css'
            },
            cms: {
                expand: true,
                cwd: 'cms-branding/css/',
                src: ['main.css'],
                dest: 'cms-branding/css/',
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
            cms: {
                files: ['cms-branding/scss/**/*.scss'],
                tasks: ['sass:cms', 'autoprefixer:cms', 'cmq:cms', 'cssmin:cms'],
                options: {
                    spawn: false
                }
            },
            editor: {
                files: ['mysite/scss/editor.scss'],
                tasks: ['sass:editor', 'autoprefixer:editor'],
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
    grunt.registerTask('cms',['watch:cms', 'autoprefixer:cms', 'cmq:cms', 'cssmin:cms', 'watch:cms']);
    grunt.registerTask('editor',['watch:editor', 'autoprefixer:editor', 'cmq:cms', 'watch:editor']);
}