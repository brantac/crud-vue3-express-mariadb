-- Initial scripts for the MariaDB database.
CREATE DATABASE IF NOT EXISTS `app`;

USE `app`;

CREATE TABLE IF NOT EXISTS `address` (
    `address_id` INT NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(150) NOT NULL,
    `number` INT(5) NOT NULL,
    `complement` VARCHAR(150) NOT NULL,
    `zipcode` INT(8) NOT NULL,
    `city` VARCHAR(150) NOT NULL,
    `state` CHAR(2) NOT NULL,
    CONSTRAINT `pk_address_id` PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8;

CREATE TABLE IF NOT EXISTS `user` (
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `cpf` CHAR(11) UNIQUE,
    `password` VARCHAR(30) NOT NULL,
    `address_id` INT,
    CONSTRAINT `pk_user_id` PRIMARY KEY (`user_id`),
    CONSTRAINT `fk_user_address_id`
    FOREIGN KEY (`address_id`) REFERENCES `address`(`address_id`)
    ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8;


-- Load address data from .txt file
LOAD DATA LOCAL INFILE '/app/address.txt' INTO TABLE `address`
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
(street, number, complement, zipcode, city, state);

-- Load user data from .txt file
LOAD DATA LOCAL INFILE '/app/user.txt' INTO TABLE `user`
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
(name, email, cpf, password, address_id);
