DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

-- Uses bamazon db
USE bamazon_db;

-- Creation of my products table --
CREATE TABLE products (
  item_id INT auto_increment NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,3) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shovel", "Gardening", "50", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Seed Packet", "Gardening", "3", "100");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoe", "Gardening", "15", "9");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gloves", "Gardening", "7", "1");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Potting Soil", "Gardening", "10", "0");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pots", "Gardening", "15", "18");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bulbs", "Gardening", "8", "25");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fertilizer", "Gardening", "10", "4");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rake", "Gardening", "17", "5");