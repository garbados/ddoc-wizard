// ddoc reference: 
// http://docs.cloudant.com/api/design-documents-get-put-delete-copy.html#creating-or-updating-a-design-document

function filename () {
    var path = __filename.split('/');
    return path[path.length - 1].split('.')[0];
}

module.exports = {
  _id: ['_design', filename()].join('/'),
  indexes: {
    // your search indexes
  },
  views: {
    // your secondary indexes
  },
  lists: {
    // your list functions
  },
  shows: {
    // your show functions
  }
  // and any other attributes of your design doc
};