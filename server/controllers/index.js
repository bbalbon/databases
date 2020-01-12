var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get('select messages.text, users.username, rooms.roomname from messages inner join users on (users.id = messages.user) inner join rooms on (rooms.id = messages.room);', (data) => {
        counter = 0;
        data.forEach(item => {
          item.objectId = counter;
          counter ++;
        });
        let toSend = {
          results: data
        };
        res.write(JSON.stringify(toSend));
        res.end();
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, () => {
        res.end();
      });
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
      models.users.post(req.body, () => {
        res.end();
      });
    }
  }
};

// DATA FORMAT TO SEND BACK

// {
//   results: [{
//       objectId: "HgJwquxJIF"
//       username: "asdf1"
//       roomname: "America"
//       text: "Iran"
//       createdAt: "2020-01-09T23:45:38.036Z"
//       updatedAt: "2020-01-09T23:45:38.036Z"
//   }, {

//   }, ...];
// }