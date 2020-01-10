var db = require('../db');

module.exports = {
  messages: {
    get: function (query, callback) {
      return db.query(query)
        .then((data) => {
          return callback(data);
        });
    }, // a function which produces all the messages
    post: function (query, callback) {
      return db.query(query)
        .then(() => {
          callback();
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (query, callback) {
      return db.query(query)
        .then((data) => {
          return callback(data);
        });
    },
    post: function () {}
  }
};

