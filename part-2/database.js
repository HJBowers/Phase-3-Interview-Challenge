#!/usr/bin/env node
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/grocery_store';
const client = new pg.Client(connectionString);
client.connect();

const listProductsBySection = (section) => client.query("SELECT name FROM items WHERE section=$1", [section])
  .then(res => {
    console.log("Database Queries Result:", res.rows);
    console.log("|--------------+---------+\n| Product Name | Section |\n|--------------+---------+");
    res.rows.forEach(function(item) {
      console.log("|  " + item.name + " |  " + section + "    |")
    })
    console.log("|--------------+---------+");
  })
  .catch( e => console.error(e.stack))
  .then(() => client.end())


const ordersByShopper = (shopperId) => client.query("SELECT items_in_order.id_order, SUM(CASE WHEN items_in_order.id_shopper=$1 THEN items.price ELSE NULL END) FROM items_in_order INNER JOIN items ON items.id_item=items_in_order.id_item WHERE items_in_order.id_shopper=$1 GROUP BY items_in_order.id_order", [shopperId])
  .then(res => {
    console.log("|--------------+---------+\n| Product Name | Section |\n|--------------+---------+");
    res.rows.forEach(function(item) {
      console.log("|            " + item.id_order + " |  " + item.sum + "  |")
    })
    console.log("|--------------+---------+");
  })
  .catch( e => console.error(e.stack))
  .then(() => client.end())


const shoppersWhoHaveOrdered = () => client.query("SELECT shoppers.name, COUNT(*) AS total FROM orders INNER JOIN shoppers ON orders.id_shopper=shoppers.id_shopper GROUP BY shoppers.id_shopper")
  .then(res => {
    console.log("|--------------+---------+\n| Product Name | Section |\n|--------------+---------+");
    res.rows.forEach(function(item) {
      console.log("| " + item.name + "      |        " + item.total + " |")
    })
    console.log("|--------------+---------+");
  })
  .catch( e => console.error(e.stack))
  .then(() => client.end())


module.exports = { listProductsBySection, shoppersWhoHaveOrdered, ordersByShopper }
