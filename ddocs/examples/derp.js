var couchapp = require('couchapp'),
    path = require('path');

ddoc = {
  _id: '_design/derp',
  views: {
    // your secondary indexes
    test: {
      map: function (doc) {
        emit(doc._id, 1);
      },
      reduce: '_stats'
    }
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