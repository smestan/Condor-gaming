module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/main.css' : 'sass/main.scss'
                }
            }
        },
        watch: {
            dist: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        cssmin: {
            dist: {
                src: 'css/main.css',
                dest: 'css/main.min.css'
            }
        },
        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'js/main.min.js'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.min.html': 'index.html', 
                }
            },
        },
        concat: {
            dist: {
                files: {
                    'js/bundle.js': 'js/*.js'     
                }
            },
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin']); //minify => html-css-js
};