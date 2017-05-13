module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
              development: {
                options: {
                  //--todo--paths
                  paths: ['/src/assets/css'],
                  compress:true
                },
                files: [{
                  expand:true,
                  cwd:'templet',
                  src:'**/*.less',
                  dest: 'templet/',
                  ext: '.css'
                }]

              },
              production: {
                // options: {
                //   paths: ['assets/css'],
                //   plugins: [
                //     new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                //     new (require('less-plugin-clean-css'))(cleanCssOptions)
                //   ],
                //   modifyVars: {
                //     imgPath: '"http://mycdn.com/path/to/images"',
                //     bgColor: 'red'
                //   }
                // },
                // files: {
                //   'path/to/result.css': 'path/to/source.less'
                // }
              }
      },
      watch: {
        scripts: {
          files: ['templet/css/*.less'],
          tasks: ['less']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 开发环境
    grunt.registerTask('lessDev', ['less:development']);
    // 线上环境
    grunt.registerTask('lessPro', ['less:production']);

    // grunt
    grunt.registerTask('default', ['less','watch']);

};
