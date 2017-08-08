DROP TABLE IF EXISTS items;
CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price MONEY NOT NULL,
  section VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  shopper_id SERIAL PRIMARY KEY,
  shopper_name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  shopper_id INT NOT NULL,
  FOREIGN KEY (shopper_id) REFERENCES shoppers(shopper_id)
);

DROP TABLE IF EXISTS items_in_order;
CREATE TABLE items_in_order (
  id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  item_id INT NOT NULL,
  FOREIGN KEY (item_id) REFERENCES items(item_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
