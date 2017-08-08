#!/usr/bin/env node
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/grocery_store';
const client = new pg.Client(connectionString);
const Table = require('cli-table');
client.connect();

const listProductsBySection = (section) => client.query("SELECT name FROM items WHERE section=$1", [section])
  .then(res => {
    const table = new Table()
    const header = {"Product Name": "Section"}
    table.push(header)
    res.rows.forEach(function(item) {
      table.push([item.name, section])
    })
    console.log(table.toString())
  })
  .catch( e => console.error(e.stack))
  .then(() => client.end())

const ordersByShopper = (shopperId) => client.query("SELECT orders.id_order, orders.total FROM orders WHERE orders.id_shopper=$1", [shopperId])
  .then(res => {
    const table = new Table()
    const header = {"order id": "total cost"}
    table.push(header)
    res.rows.forEach(function(item) {
      table.push([item.id_order, item.total])
    })
    console.log(table.toString())
  })
  .catch( e => console.error(e.stack))
  .then(() => client.end())

const shoppersWhoHaveOrdered = () => client.query("SELECT shoppers.name, COUNT(*) AS total FROM orders INNER JOIN shoppers ON orders.id_shopper=shoppers.id_shopper GROUP BY shoppers.id_shopper")
.then(res => {
  const table = new Table()
  const header = {"shopper name": "number of orders"}
  table.push(header)
  res.rows.forEach(function(item) {
    table.push([item.name, item.total])
  })
  console.log(table.toString())
})
.catch( e => console.error(e.stack))
.then(() => client.end())


module.exports = { listProductsBySection, shoppersWhoHaveOrdered, ordersByShopper }
