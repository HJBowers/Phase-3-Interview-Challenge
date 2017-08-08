#!/usr/bin/env node
const { listProductsBySection, ordersByShopper, shoppersWhoHaveOrdered } = require('./queries.js')

const run = (command, argInput) => {
  if (command === 'product-list') {
    listProductsBySection(argInput)
  } else if (command === 'shopper-orders') {
    ordersByShopper(argInput)
  } else if (command === 'real-shoppers') {
    shoppersWhoHaveOrdered()
  } else if (command) {
    console.log("Invalid Command")
  }
}

run(process.argv[2], process.argv[3])
