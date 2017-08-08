const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const database = require('./database')

describe('Command: product-list\n', () => {
  it('1. List all products from a section as array', function(done) {
    const section = 'bulk'
    database.listProductsBySection(section)
      .then(function(fullListBySection) {
        expect(fullListBySection.rows).to.be.a('Array')
        done()
      })
      .catch(console.log)
  })

  it('2. List the number of products from a section', function(done) {
    const section = 'bulk'
    database.listProductsBySection(section)
      .then(function(fullListBySection) {
        expect(fullListBySection.rows.length).to.equal(3)
        done()
      })
      .catch(console.log)
  })

  describe('Command: shopper-orders\n', function() {
    it('1. List all orders for a given shopper id, returns the order id, and the total cost of the order', function(done) {
      const shopperId = '1'
      database.ordersByShopper(shopperId)
        .then((ordersAndTotals) => {
          expect(ordersAndTotals.rows).to.be.a('Array')
          done()
        })
        .catch(console.log)
    })
  })

  describe('Command: real-shoppers\n', function() {
    it('1. List all the shoppers that have at least 1 order, and also display the number of orders for them', function(done) {
      database.shoppersWhoHaveOrdered()
        .then((shoppersAndOrders) => {
          expect(shoppersAndOrders.rows).to.be.a('Array')
          done()
        })
        .catch(console.log)
    })
  })
})
