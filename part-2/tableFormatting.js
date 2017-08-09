#!/usr/bin/env node
const input = process.argv[3]

const productList = (queryResults) => {
  console.log("|--------------+---------+\n| Product Name | Section |\n|--------------+---------+")
  queryResults.forEach(function(item) {
    console.log("| " + item.name + "       |  " + input + "  |")
  })
  console.log("|--------------+---------+")
  process.exit()
}

const shopperOrders = (queryResults) => {
  console.log("|-------------+---------+\n| order id | total cost |\n|-------------+---------+")
  queryResults.forEach(function(item) {
    console.log("|           " + item.id_order + " |  " + item.sum + "  |")
  })
  console.log("|-------------+---------+")
  process.exit()
}

const realShoppers = (queryResults) => {
  console.log("|--------------+------------------+\n| shopper name | number of orders |\n|--------------+------------------+")
  queryResults.forEach(function(item) {
    console.log("| " + item.name + "       |                " + item.total + " |")
  })
  console.log("|--------------+------------------+")
  process.exit()
}

module.exports = {productList, shopperOrders, realShoppers}
