-- NotSoNice DB
CREATE DATABASE notsoniceDB;

USE notsoniceDB;

CREATE TABLE notsoniceTable
(
	id int NOT NULL AUTO_INCREMENT,
	racist varchar(255) NOT NULL,
	offensive varchar(255) NOT NULL,
	sexist varchar(255) NOT NULL,
	PRIMARY KEY (id)
);