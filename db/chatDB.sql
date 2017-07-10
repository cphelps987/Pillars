-- Chat DB
CREATE DATABASE chatDB;

USE chatDB;

CREATE TABLE chatTable
(
	id int NOT NULL AUTO_INCREMENT,
	link varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	PRIMARY KEY (id)
);