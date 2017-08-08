#!/usr/bin/env node
const { listProductsBySection, ordersByShopper, shoppersWhoHaveOrdered } = require('./database.js')
const {productList, shopperOrders, realShoppers} = require('./tableFormatting')

const run = (command, argInput) => {
  if (command === 'product-list') {
    listProductsBySection(argInput)
    .then(res => {
      productList(res.rows)
    })
    .catch( e => console.error(e.stack))
    .then(() => client.end())
  } else if (command === 'shopper-orders') {
    ordersByShopper(argInput)
    .then(res => {
      shopperOrders(res.rows)
    })
    .catch( e => console.error(e.stack))
    .then(() => client.end())
  } else if (command === 'real-shoppers') {
    shoppersWhoHaveOrdered()
    .then(res => {
      realShoppers(res.rows)
    })
    .catch( e => console.error(e.stack))
    .then(() => client.end())
  } else if (command) {
    console.log("Invalid Command")
  }
}

run(process.argv[2], process.argv[3])
