-- FAQ DB
CREATE DATABASE faqDB;

USE faqDB;

CREATE TABLE faqTable
(
	id int NOT NULL AUTO_INCREMENT,
	questions varchar(255) NOT NULL,
	answers varchar(255) NOT NULL,
	PRIMARY KEY (id)
);