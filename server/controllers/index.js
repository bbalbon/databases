var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // handles incoming query to retrieve all
      //supply a response back to client
        //add headers res.end()
    },
    post: function (req, res) {
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

    },
    post: function (req, res) {
      // send user to INSERT USERS (req.user);
    }
  }
};

