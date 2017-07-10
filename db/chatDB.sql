-- Chat DB
CREATE DATABASE chatDB;

USE chatDB;

CREATE TABLE chatTable
(
	id int NOT NULL AUTO_INCREMENT,
	chatTitle varchar(255) NOT NULL,
	chatDes varchar(255) NOT NULL,
	PRIMARY KEY (id)
);