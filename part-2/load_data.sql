INSERT INTO items(name,price,section) VALUES ('Aluminum Foil','8.84','miscellaneous');
INSERT INTO items(name,price,section) VALUES ('Apples','10.81','produce');
INSERT INTO items(name,price,section) VALUES ('Bacon','9.01','meat');
INSERT INTO items(name,price,section) VALUES ('Bagles','10.67','bread');
INSERT INTO items(name,price,section) VALUES ('Baguette/French Bread','5.01','bread');
INSERT INTO items(name,price,section) VALUES ('Barbeque Sauce','16.96','packaged');
INSERT INTO items(name,price,section) VALUES ('Butter','4.29','dairy');
INSERT INTO items(name,price,section) VALUES ('Carrots','2.88','produce');
INSERT INTO items(name,price,section) VALUES ('Cheese','1.75','dairy');
INSERT INTO items(name,price,section) VALUES ('Coffee','6.17','packaged');
INSERT INTO items(name,price,section) VALUES ('Cold Cuts','1.47','deli');
INSERT INTO items(name,price,section) VALUES ('Cream Cheese','16.11','dairy');
INSERT INTO items(name,price,section) VALUES ('Croissants','6.36','bread');
INSERT INTO items(name,price,section) VALUES ('Eggs','2.66','dairy');
INSERT INTO items(name,price,section) VALUES ('Fish','0.49','meat');
INSERT INTO items(name,price,section) VALUES ('Flour','8.74','bulk');
INSERT INTO items(name,price,section) VALUES ('Fruit','8.87','produce');
INSERT INTO items(name,price,section) VALUES ('Grapes','8.78','produce');
INSERT INTO items(name,price,section) VALUES ('Green Beans','7.86','produce');
INSERT INTO items(name,price,section) VALUES ('Ground Beef','16.03','meat');
INSERT INTO items(name,price,section) VALUES ('Ham','13.27','meat');
INSERT INTO items(name,price,section) VALUES ('Honey','9.31','packaged');
INSERT INTO items(name,price,section) VALUES ('Ice Cream','14.08','frozen');
INSERT INTO items(name,price,section) VALUES ('Ketchup','2.94','packaged');
INSERT INTO items(name,price,section) VALUES ('Lemons','17.24','produce');
INSERT INTO items(name,price,section) VALUES ('Lettuce','16.28','produce');
INSERT INTO items(name,price,section) VALUES ('Milk','2.34','dairy');
INSERT INTO items(name,price,section) VALUES ('Mushrooms','16.68','produce');
INSERT INTO items(name,price,section) VALUES ('Oil','5.25','packaged');
INSERT INTO items(name,price,section) VALUES ('Onions','1.11','produce');
INSERT INTO items(name,price,section) VALUES ('Orange Juice','2.52','frozen');
INSERT INTO items(name,price,section) VALUES ('Oranges','3.40','produce');
INSERT INTO items(name,price,section) VALUES ('Pasta','13.39','bulk');
INSERT INTO items(name,price,section) VALUES ('Pizza','16.61','frozen');
INSERT INTO items(name,price,section) VALUES ('Potatoes','13.29','produce');
INSERT INTO items(name,price,section) VALUES ('Rice','5.23','bulk');
INSERT INTO items(name,price,section) VALUES ('Salami','12.70','meat');
INSERT INTO items(name,price,section) VALUES ('Soda','11.21','miscellaneous');
INSERT INTO items(name,price,section) VALUES ('Sour Cream','1.73','dairy');
INSERT INTO items(name,price,section) VALUES ('Tomatoes','1.56','produce');
INSERT INTO items(name,price,section) VALUES ('Yogurt','18.67','dairy');
INSERT INTO shoppers(name) VALUES ('murphy');
INSERT INTO shoppers(name) VALUES ('jellyb');
INSERT INTO shoppers(name) VALUES ('murphy');
INSERT INTO shoppers(name) VALUES ('samsam');
INSERT INTO shoppers(name) VALUES ('hannah');
INSERT INTO shoppers(name) VALUES ('cocoa');
INSERT INTO orders(id_shopper) VALUES ('1');
INSERT INTO orders(id_shopper) VALUES ('1');
INSERT INTO orders(id_shopper) VALUES ('1');
INSERT INTO orders(id_shopper) VALUES ('1');
INSERT INTO orders(id_shopper) VALUES ('2');
INSERT INTO orders(id_shopper) VALUES ('2');
INSERT INTO orders(id_shopper) VALUES ('2');
INSERT INTO orders(id_shopper) VALUES ('3');
INSERT INTO orders(id_shopper) VALUES ('3');
INSERT INTO orders(id_shopper) VALUES ('4');
INSERT INTO orders(id_shopper) VALUES ('5');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('1', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('1', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('1', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('1', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('1', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('2', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('2', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('2', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('3', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('3', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('4', '30', '1');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('5', '30', '2');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('6', '30', '2');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('7', '30', '2');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('8', '30', '3');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('9', '30', '3');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('10', '30', '4');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('11', '30', '5');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('11', '30', '5');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('11', '30', '5');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('11', '30', '5');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('11', '30', '5');
INSERT INTO items_in_order(id_order,id_item, id_shopper) VALUES ('11', '30', '5');
