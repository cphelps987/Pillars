-- Admin DB
CREATE DATABASE userDB;

USE userDB;

CREATE TABLE userTable
(
	id int NOT NULL AUTO_INCREMENT,
	userNames varchar(255) NOT NULL,
	link varchar(255) NOT NULL,
	PRIMARY KEY (id)
);