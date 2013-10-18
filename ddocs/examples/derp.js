var couchapp = require('couchapp'),
    path = require('path');

ddoc = {
  _id: '_design/derp',
  views: {
    // your view code
  },
  lists: {
    // your list functions
  },
  shows: {
    // your show functions
  }
  // and any other attributes of your design doc
  // like, say, update handlers and search indexes
};

module.exports = ddoc;