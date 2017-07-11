CREATE DATABASE pillars;

USE pillars;

CREATE TABLE chatTable
(
	id int NOT NULL AUTO_INCREMENT,
	link varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	moderators varchar(255) NOT NULL,
	moderation_level varchar(255) NOT NULL,
	flagged int NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE faqTable
(
	id int NOT NULL AUTO_INCREMENT,
	questions varchar(255) NOT NULL,
	answers varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE linksTable
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	links varchar(255) NOT NULL,
	userScore int NOT NULL,
	facebook varchar(255) NULL,
	twitter varchar(255) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE notsoniceTable
(
	id int NOT NULL AUTO_INCREMENT,
	wordlist varchar(255) NOT NULL,
	category varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


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

CREATE TABLE `offensiveTable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
);
