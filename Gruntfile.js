/**
 * Created by bradflyon on 9/6/14.
 */

module.exports = function(grunt) {

    //initially, specify the files in order
    // eventually,

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        cssmin: {
            files:[{
                        expand:true,
                        cwd:'src/',
                        src:['*.css'],
                        dest: 'dist/',
                        ext:'min.css'
                    }]
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                srcIgnore: ['src/**/*.js'],
                src: ['js/vendor/modernizr-2.6.2.min.js',
                        'js/vendor/jquery-1.10.2.min.js',
                        'js/plugins.js',
                        'js/vendor/jquery-ui-1.11.0.custom/jquery-ui.min.js',
                        'js/vendor/date.format.js',
                        'js/vendor/media/js/jquery.dataTables.js',
                        'js/vendor/uri.js',
                        'js/vendor/shb.js',
                        'js/vendor/fastclick.js',
                        'js/vendor/spin.js',
                        'js/vendor/d3.js',
                        'js/vendor/jquery.qtip.min.js',
                        'js/vendor/moment.js',
                        'js/callCourtListenerData.js',
                        'js/myutils.js',
                        'js/districtCourts.js',
                        'js/judges.js',
                        'js/courtListenerData.js',
                        'js/scdb_courts.js',
                        'js/stateCourts.js',
                        'js/makeScraperArray.js',
                        'js/courts.js',
                        'js/main.js'
                        ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //grunt.registerTask('test', ['jshint', 'qunit']);

    //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
    //grunt.registerTask('default', ['cssmin', 'concat', 'uglify']);
    grunt.registerTask('default', ['concat', 'uglify']);

};