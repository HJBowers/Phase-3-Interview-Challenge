const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const database = require("./database")

describe('Command: product-list\n', () => {
  it("1. List all products from a section", function() {
    const section = 'dairy'
    database.listProductsBySection(section)
      .then((fullListBySection) => {
        expect(fullListBySection).to.be.a('Array')
        done()
      })
      .catch(console.log)
  })

  describe("Command: shopper-orders", function() {
    it("1. List all orders for a given shopper id, returns the order id, and the total cost of the order", function() {
      const shopperId = '1'
      database.ordersByShopper(shopperId)
        .then((ordersAndTotals) => {
          expect(ordersAndTotals).to.be.a('Array')
          done()
        })
        .catch(console.log)
    })
  })

  describe("Command: real-shoppers", function() {
    it("1. List all the shoppers that have at least 1 order, and also display the number of orders for them", function() {
      database.shoppersWhoHaveOrdered()
        .then((shoppersAndOrders) => {
          expect(shoppersAndOrders).to.be.a('Array')
          done()
        })
        .catch(console.log)
    })
  })
})
