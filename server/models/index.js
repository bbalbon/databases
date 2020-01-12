var db = require('../db');
const Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (query, callback) {
      return db.query(query)
        .then((data) => {
          return callback(data);
        });
    }, // a function which produces all the messages
    post: function (message, callback) {
      let retrieveUserId = module.exports.users.post(message.username);
      let retrieveRoomId = module.exports.rooms.post(message.roomname);
      Promise.all([retrieveUserId, retrieveRoomId]).then((values) => {
        return db.query(`INSERT INTO messages (text, user, room) VALUES ("${message.text}", ${values[0][0].id}, ${values[1][0].id})`)
          .then(() => {
            callback();
          });
      });
    } // a function which can be used to insert a message into the database
  },

  // Format of incoming messages
  // { username: 'Roger', text: 'asdf', roomname: 'lobby' }

  users: {
    // Ditto as above.
    get: function (query, callback) {
      return db.query(query)
        .then((data) => {
          return callback(data);
        });
    },
    post: (username) => {
      return db.query(`SELECT users.id FROM users WHERE username = '${username}'`)
        .then((results) => {
          return results;
        })
        .catch(() => {
          db.query(`INSERT INTO users (username) values ('${username}')`);
        })
        .then(() => {
          return db.query(`SELECT users.id FROM users WHERE username = '${username}'`);
        })
        .then((results) => {
          return results;
        });
    }
  },

  rooms: {
    post: (roomName) => {
      return db.query(`SELECT rooms.id FROM rooms WHERE roomname = '${roomName}'`)
        .then((results) => {
          return results;
        })
        .catch(() => {
          db.query(`INSERT INTO rooms (roomname) values ('${roomName}')`);
        })
        .then(() => {
          return db.query(`SELECT rooms.id FROM rooms WHERE roomname = '${roomName}'`);
        })
        .then((results) => {
          return results;
        });
    }
  }
};

