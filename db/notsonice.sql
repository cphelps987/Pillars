CREATE DATABASE notsoniceDB;

USE notsoniceDB;

CREATE TABLE notsoniceTable
(
	id int NOT NULL AUTO_INCREMENT,
	wordlist varchar(255) NOT NULL,
	category (racist, offensive, sexist) varchar(255) NOT NULL,
	PRIMARY KEY (id)
);