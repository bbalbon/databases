CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR (40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR (40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR (150) NOT NULL,
  user INT NOT NULL,
  room INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user) REFERENCES users (id),
  FOREIGN KEY (room) REFERENCES rooms (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
      mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

