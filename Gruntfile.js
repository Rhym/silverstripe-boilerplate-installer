module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        directories: {
            project: 'mysite',
            cmsBranding: 'cms-branding'
        },
        pkg: grunt.file.readJSON('package.json'),
        /** ===================================================================================
         * CSS - Sass
         =================================================================================== */
        sass: {
            dist: {
                files: {
                    '<%= directories.project %>/css/main.css': '<%= directories.project %>/scss/main.scss'
                }
            },
            cms: {
                files: {
                    '<%= directories.cmsBranding %>/css/main.css': '<%= directories.cmsBranding %>/scss/main.scss'
                }
            },
            editor: {
                files: {
                    '<%= directories.project %>/css/editor.css': '<%= directories.project %>/scss/editor.scss'
                }
            }
        },
        /** ===================================================================================
         * CSS - Auto Pre-fixer
         =================================================================================== */
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            dist: {
                files: {
                    '<%= directories.project %>/css/main.css': '<%= directories.project %>/css/main.css'
                }
            },
            cms: {
                files: {
                    '<%= directories.cmsBranding %>/css/main.css': '<%= directories.cmsBranding %>/css/main.css'
                }
            },
            editor: {
                files: {
                    '<%= directories.project %>/css/editor.css': '<%= directories.project %>/css/editor.css'
                }
            }
        },
        /** ===================================================================================
         * CSS - Combine Media Queries
         =================================================================================== */
        cmq: {
            options: {
                log: false
            },
            dist: {
                files: {
                    '<%= directories.project %>/css/': ['<%= directories.project %>/css/main.css']
                }
            },
            cms: {
                files: {
                    '<%= directories.cmsBranding %>/css/': ['<%= directories.cmsBranding %>/css/main.css']
                }
            }
        },
        /** ===================================================================================
         * CSS - Minification
         =================================================================================== */
        cssmin: {
            options: {
                rebase: false
            },
            dist: {
                expand: true,
                cwd: '<%= directories.project %>/css/',
                src: ['main.css'],
                dest: '<%= directories.project %>/css/',
                ext: '.min.css'
            },
            cms: {
                expand: true,
                cwd: '<%= directories.cmsBranding %>/css/',
                src: ['main.css'],
                dest: '<%= directories.cmsBranding %>/css/',
                ext: '.min.css'
            }
        },
        /** ===================================================================================
         * Javascript - Combine
         =================================================================================== */
        concat: {
            dist: {
                src: [
                    '<%= directories.project %>/javascript/src/*.js'
                ],
                dest: '<%= directories.project %>/javascript/build/script.js'
            }
        },
        /** ===================================================================================
         * Javascript - Minification
         =================================================================================== */
        uglify: {
            build: {
                src: '<%= directories.project %>/javascript/build/script.js',
                dest: '<%= directories.project %>/javascript/build/script.min.js'
            }
        },
        /** ===================================================================================
         * Tests - CSS
         =================================================================================== */
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['<%= directories.project %>/css/main.min.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['<%= directories.project %>/css/main.min.css']
            }
        },
        /** ===================================================================================
         * Tests - Javascript
         =================================================================================== */
        jshint: {
            all: ['<%= directories.project %>/javascript/src/*.js']
        },
        /** ===================================================================================
         * Watch Task
         =================================================================================== */
        watch: {
            dist: {
                files: ['<%= directories.project %>/scss/**/*.scss'],
                tasks: ['sass:dist', 'autoprefixer:dist', 'cmq:dist', 'cssmin:dist'],
                options: {
                    spawn: false
                }
            },
            cms: {
                files: ['<%= directories.cmsBranding %>/scss/**/*.scss'],
                tasks: ['sass:cms', 'autoprefixer:cms', 'cmq:cms', 'cssmin:cms'],
                options: {
                    spawn: false
                }
            },
            editor: {
                files: ['<%= directories.project %>/scss/editor.scss'],
                tasks: ['sass:editor', 'autoprefixer:editor'],
                options: {
                    spawn: false
                }
            },
            jsConcat: {
                files: ['<%= directories.project %>/javascript/src/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });
    /**
     * Use "matchdep" to load all of our NPM tasks.
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default',['watch']);
}