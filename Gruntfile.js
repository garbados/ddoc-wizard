// get config if it exists
try {
  var ddocs = require('./ddocs');
} catch (e) {
  var ddocs = {};
}

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'ddocs/**/*',
        'tasks/*',
        'Gruntfile.js'
      ]
    },
    prompt: {
      init: {
        options: {
          questions: [{
            config: 'remote',
            type: 'input',
            message: 'What is the URL for your Cloudant account?',
            default: 'http://localhost:5984'
          }]
        }
      }
    },
    template: {
      init: {
        options: {
          data: {
            remote: '<%= remote %>',
            user: '<%= user %>',
            pass: '<%= pass %>'
          }
        },
        files: {
          'config.js': ['config.js.example']
        }
      }
    },
    mkcouchdb: ddocs,
    couchapp: ddocs
  });

  // Load plugins
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadTasks('./tasks');

  // Default task(s).
  grunt.registerTask('default', [
    'jshint',
    'mkcouchdb',
    'couchapp'
  ]);

  grunt.registerTask('init', [
    'prompt',
    'template:init'
  ]);

};