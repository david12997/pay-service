CREATE DATABASE IF NOT EXISTS your_database_name;
USE your_database_name;

CREATE TABLE `owner`(
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `phone` BIGINT(11)  DEFAULT NULL,
  `nit` INT(11)  DEFAULT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `usuario` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `name` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `phone` bigint(11) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `nit` int(11) DEFAULT NULL,
  `token` varchar(200) DEFAULT NULL

  PRIMARY KEY (`id`)
);

CREATE TABLE `proveedor` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `name` text NOT NULL,
  `solutions` longtext DEFAULT NULL,
  `data_provaider` longtext DEFAULT NULL,
  `media` longtext DEFAULT NULL,
  `response` text DEFAULT NULL
  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
);

CREATE TABLE `servicios` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `servicios_proveedor` int(10) UNSIGNED DEFAULT NULL,
  `data_servicio` text DEFAULT NULL,
  `body_request` text DEFAULT NULL
  PRIMARY KEY (`id`),
  FOREIGN KEY (`servicios_proveedor`) REFERENCES `proveedor`(`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)

);

CREATE TABLE `transaccion` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `id_provaider` int(10) NOT NULL,
  `transaccion_usuario` int(10) UNSIGNED DEFAULT NULL,
  `data_remitente` longtext NOT NULL,
  `data_destinatario` longtext NOT NULL,
  `data_transaccion` text DEFAULT NULL,
  `mercadopago_id` varchar(200) DEFAULT NULL COMMENT 'payment id',
  `mp_preference_id` varchar(200) NOT NULL,
  `merchant_order_id` int(11) DEFAULT NULL,
  
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_provaider`) REFERENCES `proveedor`(`id`),
  FOREIGN KEY (`transaccion_usuario`) REFERENCES `usuario`(`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
);

CREATE TABLE `payment` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `data_paiment` text NOT NULL,
  `provider` varchar(200) NOT NULL,
  `user_provider_id` varchar(200) NOT NULL,
  `payment_id` varchar(10) DEFAULT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
);


CREATE TABLE `user_products` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `price` varchar(19) DEFAULT NULL,
  `iva` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `media` text DEFAULT NULL,
  `delivery` varchar(200) DEFAULT NULL,
  `price_delivery` varchar(200) DEFAULT NULL,
  `product_user` int(10) UNSIGNED DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `finished_pays` int(11) DEFAULT NULL
  
  PRIMARY KEY (`id`),
  FOREIGN KEY (`product_user`) REFERENCES `usuario`(`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
);

CREATE TABLE `user_service` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `price` varchar(200) DEFAULT NULL,
  `iva` varchar(200) DEFAULT NULL,
  `recollector` varchar(200) DEFAULT NULL,
  `media` text DEFAULT NULL,
  `services_user` int(10) UNSIGNED DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `finished_pays` int(11) DEFAULT NULL

  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
  FOREIGN KEY (`services_user`) REFERENCES `usuario`(`id`)


);

CREATE TABLE `paylink` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'draft',
  `owner` int(10) UNSIGNED DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `paylink_user` int(10) UNSIGNED NOT NULL,
  `data_paylink` text DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `media` text DEFAULT NULL,
  `color` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `privacity` varchar(200) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `finished_pays` int(11) DEFAULT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`owner`) REFERENCES `owner`(`id`)
  FOREIGN KEY (`paylink_user`) REFERENCES `usuario`(`id`)

);



/* create first owner */
INSERT INTO `owner` (
  `status`, 
  `name`, 
  `email`, 
  `password`, 
  `phone`, 
  `nit`) VALUES ('published', 'admin','admin@payservices.com', 'admin', 123456789, 123456789);