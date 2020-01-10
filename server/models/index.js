var db = require('../db');

module.exports = {
  messages: {
    get: function (query, callback) {
      return db.query(query)
        .then((data) => {
          return callback(data);
        });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (query) {
      return db.connect()
        .then(() => {
          return db.query(query);
        })
        .then((data) => {
          console.log(data);
        });
    },
    post: function () {}
  }
};

