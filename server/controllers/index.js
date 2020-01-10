var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get('SELECT * FROM messages', (data) => {
        res.write(JSON.stringify(data));
        res.end();
      });
    },
    post: function (req, res) {
      let message = req.body.message;
      models.messages.post('INSERT INTO messages VALUES ', () => {
        res.end();
      });
      // a function which handles posting a message to the database
      // format the message access req.message
      //send them to database via insert message INSERT ROOMs (req.roomname);
      // send message to INSERT MESSAGE (req.message);
      //send response to client
      //with headers, res.end()
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get('SELECT * FROM users', (data) => {
        res.write(JSON.stringify(data));
        res.end();
      });
    },
    post: function (req, res) {
      // send user to INSERT USERS (req.user);
    }
  }
};

// DATA FORMAT TO SEND BACK

// {
//   results: [{
//     objectId: "HgJwquxJIF"
//       username: "asdf1"
//       roomname: "America"
//       text: "Iran"
//       createdAt: "2020-01-09T23:45:38.036Z"
//       updatedAt: "2020-01-09T23:45:38.036Z"
//   }, {

//   }, ...];
// }