CREATE DATABASE IF NOT EXISTS your_database_name;
USE your_database_name;

CREATE TABLE `owner`(
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `phone` BIGINT(11) NOT NULL,
  `nit` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `usuario` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `owner` INT(255) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `phone` BIGINT(11) NOT NULL,
  `nit` INT(11) NOT NULL,
  `token` VARCHAR(255) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE `proveedor` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `owner` INT(255) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `solutions` JSON NOT NULL,
  `data_provider` JSON NOT NULL,
  `media` JSON NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner_provider`) REFERENCES `owner`(`id`)
);

CREATE TABLE `servicios` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `owner` INT(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `service_provider` INT(255) NOT NULL,
  `data_service` JSON NOT NULL,
  `body_request` JSON NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`service_provider`) REFERENCES `proveedor`(`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)

);

CREATE TABLE `transaccion` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `owner` INT(255) NOT NULL,
  `id_provider` INT(255) NOT NULL,
  `transaction_user` INT(255) NOT NULL,
  `data_remitente` JSON NOT NULL,
  `data_destinatario` JSON NOT NULL,
  `data_transaction` JSON NOT NULL,
  `mercdopago_id` VARCHAR(50) NOT NULL,
  `mp_preference_id` VARCHAR(250) NOT NULL,
  `merchant_order_id` INT(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_provider`) REFERENCES `provider`(`id`),
  FOREIGN KEY (`transaction_user`) REFERENCES `usuario`(`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
);

CREATE TABLE `payment` (
  `id` INT(255) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `owner` INT(255) NOT NULL,
  `data_paiment` JSON NOT NULL,
  `provider` VARCHAR(50) NOT NULL,
  `user_provider_id` VARCHAR(50) NOT NULL,
  `payment_id` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
);


/* create first owner */
INSERT INTO `owner` (
  `status`, 
  `name`, 
  `email`, 
  `password`, 
  `phone`, 
  `nit`) VALUES ('published', 'admin','admin@payservices.com', 'admin', 123456789, 123456789);