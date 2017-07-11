CREATE DATABASE pillars;

USE pillars;

CREATE TABLE chatTable
(
	id int NOT NULL AUTO_INCREMENT,
	link varchar(255),
	title varchar(255),
	moderators varchar(255),
	moderation_level varchar(255),
	flagged int,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE faqTable
(
	id int NOT NULL AUTO_INCREMENT,
	questions varchar(255),
	answers varchar(255),
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

CREATE TABLE userTable
(
	id int NOT NULL AUTO_INCREMENT,
	userName varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	role varchar(255),
	verifiedUser varchar(255),
	userScore int,
	link varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE `offensiveTable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
);

CREATE TABLE `users_chats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(15),
  `chatTableid` int(15),
)
