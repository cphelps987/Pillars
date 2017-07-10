-- User DB
CREATE DATABASE viewDB;

USE viewDB;

CREATE TABLE viewTable
(
	id int NOT NULL AUTO_INCREMENT,
	userNames varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	verifiedUsers varchar(255) NOT NULL,
	role varchar(255) NOT NULL,
	score int NOT NULL,
	link varchar(255) NOT NULL,
	flags INT NOT NULL,
	PRIMARY KEY (id)
);
