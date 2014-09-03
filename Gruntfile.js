module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buildPath : 'build',
        buildCompressPath : 'build/tmp',
        outputPath : '../show-built',
        testPath : 'tests',
        jshint : {
            options : {
                sub : true,
                ignores : ['node_modules/**/*.js', 'bower_components/**/*.js']
            },
            all : ['**/*.js', '!Gruntfile.js']
        },
        clean: {
            options : {
                force : true
            },
            build : ["<%= buildPath %>"],
            output : ["<%= outputPath %>/**/*", "!<%= outputPath %>/.git/**/*"]
        },
        copy : {
            build : {
                files : [
                    {
                        expand: true,
                        filter: 'isFile',
                        src: [
                            '**/*',
                            '!.**/*',
                            '!Gruntfile.js',
                            '!bower.json',
                            '!<%= testPath %>/**/*',
                            '!node_modules/**/*',
                            '!bower_components/**/*',
                            '!**.md',
                            '!**.iml'
                        ],
                        dest: '<%= buildPath %>/'
                    },
                    {
                        expand: true,
                        filter: 'isFile',
                        src: [
                            'bower_components/bootstrap/dist/**/*',
                            'bower_components/ejs/ejs.min.js',
                            'bower_components/jquery/dist/jquery.min.js',
                            'bower_components/requirejs/require.js'
                        ],
                        dest: '<%= buildPath %>/'
                    }
                ]
            },
            output : {
                files : [
                    {
                        expand: true,
                        filter: 'isFile',
                        cwd : '<%= buildCompressPath %>/',
                        src: [
                            '**/*'
                        ],
                        dest: '<%= outputPath %>/'
                    }
                ]
            }
        },
        requirejs: {
            build: {
                options: {
                    appDir : '<%= buildPath %>',
                    dir: '<%= buildCompressPath %>',
                    mainConfigFile: "static/lib/requireConfig.js",
                    baseUrl: "./",
                    paths: {
                        "jquery": "empty:",
                        "bootstrap": "empty:"
                    },
                    modules : [
                        {
                            name: "static/page/index"
                        },
                        {
                            name: "static/page/error"
                        }
                    ],
                    optimizeCss: "standard"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('output', ['clean:output', 'copy:output', 'clean:build']);
    grunt.registerTask('build', ['jshint', 'clean:build', 'copy:build', 'requirejs:build', 'output']);
};