var fs = require('fs'),
    path = require('path'),
    config = require('../config');
    
var ddoc_dirs = fs.readdirSync(__dirname)
      .filter(function (name) {
        return (name !== 'index.js');
      }),
    ddocs = {};

ddoc_dirs.forEach(function (db) {
  fs.readdirSync(path.join(__dirname, db))
    .forEach(function (ddoc) {
      ddocs[JSON.stringify([db, ddoc])] = {
        app: path.join('ddocs', db, ddoc),
        db: [config.remote, db].join('/'),
        options: {
          okay_if_exists: true
        }
      };
    });
});

module.exports = ddocs;