var fs = require('fs'),
    async = require('async'),
    path = require('path');

function CreateNewDesignDoc (config) {
  if (!(config.db && config.ddoc)) {
    throw new Error('`db` and `ddoc` must be set.');
  }


  var db = config.db,
      ddoc = config.ddoc,
      src_path = path.join('templates', 'ddoc.js'),
      filepath = path.join('ddocs', db, ddoc + '.js');

  function mkdir (done) {
    fs.mkdir(path.join('ddocs', db), function (err) {
      if (err) {
        if (err.code === 'EEXIST') {
          done();
        } else {
          done(err);
        }
      } else {
        done();
      }
    });
  }

  function copydoc (done) {
    var read = fs.createReadStream(src_path),
        write = fs.createWriteStream(filepath);

    read.pipe(write).on('end', done);
  }

  return function (done) {
    async.series([mkdir, copydoc], done);
  };
}

module.exports = function (grunt) {
  grunt.registerTask('ddoc', 'Create a new design document from a template.', function () {
    var done = this.async();

    CreateNewDesignDoc({
      db: grunt.option('db'), 
      ddoc: grunt.option('ddoc')
    })(done);
  });
};