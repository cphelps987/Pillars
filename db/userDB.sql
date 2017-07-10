-- User DB
CREATE DATABASE userDB;

USE userDB;

CREATE TABLE userTable
(
	id int NOT NULL AUTO_INCREMENT,
	role varchar(255) NOT NULL,
	userNames varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	score int NOT NULL AUTO_INCREMENT, 
	link varchar(255) NOT NULL,
	PRIMARY KEY (id)
);