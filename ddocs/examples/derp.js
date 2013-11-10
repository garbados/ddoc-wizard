function filename () {
    var path = __filename.split('/');
    return path[path.length - 1].split('.')[0];
}

module.exports = {
  _id: ['_design', filename()].join('/'),
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