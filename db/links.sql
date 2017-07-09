-- Links DB
CREATE DATABASE linksDB;

USE linksDB;

CREATE TABLE linksTable
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	link varchar(255) NOT NULL,
	PRIMARY KEY (id)
);