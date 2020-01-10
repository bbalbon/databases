var Parse = {

  // server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  server: 'http://localhost:3000/classes/',
  // sever: window.location.href,


  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + 'messages',
      type: 'GET',
      // data: 'messages',
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};