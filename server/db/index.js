var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

module.exports.connect = (callback) => {
  return new Promise((resolve, reject) => {
    module.exports.connection.connect(err => {
      if (err) {
        reject(err);
      } else {
        console.log('Connected to the DB');
        resolve();
      }
    });
  });
};

module.exports.query = (query, callback) => {
  return new Promise( (resolve, reject) => {
    module.exports.connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports.connection.connect();

//create

//update

//delete

