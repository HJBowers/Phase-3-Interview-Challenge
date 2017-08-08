DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id_item SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price MONEY NOT NULL,
  section VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  id_shopper SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id_order SERIAL PRIMARY KEY,
  id_shopper INT REFERENCES shoppers(id_shopper)
);

DROP TABLE IF EXISTS items_in_order;
CREATE TABLE items_in_order (
  id_order INT NOT NULL,
  id_item INT NOT NULL,
  id_shopper INT NOT NULL,
  FOREIGN KEY (id_item) REFERENCES items(id_item),
  FOREIGN KEY (id_order) REFERENCES orders(id_order),
  FOREIGN KEY (id_shopper) REFERENCES shoppers(id_shopper)
);
