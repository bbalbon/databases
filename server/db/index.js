var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FILL_ME_IN',
  database: 'chat'
});

module.exports.query = (query, callback) => {
  return new Promise( (resolve, reject) => {
    module.exports.connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        results.length === 0 ? reject(error) : resolve(results);
      }
    });
  });
};
