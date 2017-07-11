-- User DB
CREATE DATABASE userDB;

USE userDB;

CREATE TABLE userTable
(
	id int NOT NULL AUTO_INCREMENT,
	userName varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	role varchar(255) NOT NULL,
	verifiedUser varchar(255) NOT NULL,
	userScore int NOT NULL,
	link varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
