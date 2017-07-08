-- Admin DB
CREATE DATABASE adminDB;

USE adminDB;

CREATE TABLE adminTable
(
	id int NOT NULL AUTO_INCREMENT,
	userNames varchar(255) NOT NULL,
	verifiedUsers varchar(255) NOT NULL,
	helpfulRes varchar(255) NOT NULL,
	flags INT AUTO_INCREMENT NOT NULL,
	PRIMARY KEY (id)
);