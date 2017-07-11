-- Links DB
CREATE DATABASE linksDB;

USE linksDB;

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

INSERT INTO `linksTable` (`title`, `description`, `links`, `userScore`, `facebook`, `twitter`)
VALUES
('Coming Out to Parents','Coming out to parents', 'http://www.huffingtonpost.com/2013/10/11/coming-out-resources_n_4085658.html'),
('Dating Violence','Dating Violence in Teens','https://www.cdc.gov/ViolencePrevention/intimatepartnerviolence/teen_dating_violence.html'),
('Teen Health','Teen Health information','http://teenshealth.org/en/teens/your-mind/');