/*
 * Generated on 2015-05-06
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2015 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist',
      templates: '<%= config.src %>/templates',
      assets: '<%= config.templates %>/assets',
      scripts: '<%= config.assets %>/scripts',
      css: '<%= config.assets %>/scss/main.css',
      scss: '<%= config.assets %>/scss/main.scss',
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false,
        },
        files: {
          '<%= config.css %>': '<%= config.scss %>'
        }
      }
    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}', '<%= config.assets%>/**/*.{js,scss}'],
        tasks: ['assemble', 'sass', 'copy']
      },
      sass: {
        files: '<%= config.src %>/scss/{,*/}*.{scss,sass}',
        tasks: ['sass:dev']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.scss',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/{,*/}*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'bower_components',
        src: '**',
        dest: '<%= config.dist %>/bower_components'
      },
      theme: {
        expand: true,
        cwd: 'src/templates/assets/',
        src: '**',
        dest: '<%= config.dist %>'
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.*']

  });

  grunt.loadNpmTasks('assemble');

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'assemble',
    'sass'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
