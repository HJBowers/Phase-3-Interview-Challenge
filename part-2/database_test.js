const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const database = require('./database')

describe('Command: product-list\n', () => {
  it('1. Lists all products from a section as array', function(done) {
    const section = 'bulk'
    database.listProductsBySection(section)
      .then(function(fullListBySection) {
        expect(fullListBySection.rows).to.be.a('Array')
        done()
      })
      .catch(console.log)
  })
  it('2. Lists the number of products from a section', function(done) {
    const section = 'bulk'
    database.listProductsBySection(section)
      .then(function(fullListBySection) {
        expect(fullListBySection.rows.length).to.equal(3)
        done()
      })
      .catch(console.log)
  })
  it('3. Lists the third product in the section', function(done) {
    const section = 'bulk'
    database.listProductsBySection(section)
      .then(function(fullListBySection) {
        expect(fullListBySection.rows[2].name).to.equal('Rice')
        done()
      })
      .catch(console.log)
  })
})

describe('Command: shopper-orders\n', function() {
  it('1. Lists all order ids and total order cost for a given shopper id', function(done) {
    const shopperId = '1'
    database.ordersByShopper(shopperId)
      .then((ordersAndTotals) => {
        expect(ordersAndTotals.rows).to.be.a('Array')
        done()
      })
      .catch(console.log)
  })
  it('2. Lists the number of orders from a section', function(done) {
    const shopperId = '1'
    database.ordersByShopper(shopperId)
      .then((ordersAndTotals) => {
        expect(ordersAndTotals.rows.length).to.equal(4)
        done()
      })
      .catch(console.log)
  })
  it('3. Lists the third total sum', function(done) {
    const shopperId = '1'
    database.ordersByShopper(shopperId)
      .then((ordersAndTotals) => {
        expect(ordersAndTotals.rows[2].sum).to.equal('$2.22')
        done()
      })
      .catch(console.log)
  })
})

describe('Command: real-shoppers\n', function() {
  it('1. Lists all orders for shoppers that have at least 1 order', function(done) {
    database.shoppersWhoHaveOrdered()
      .then((shoppersAndOrders) => {
        expect(shoppersAndOrders.rows).to.be.a('Array')
        done()
      })
      .catch(console.log)
  })
  it('2. Lists the number of orders from a section', function(done) {
    database.shoppersWhoHaveOrdered()
      .then((shoppersAndOrders) => {
        done()
        expect(shoppersAndOrders.rows.length).to.equal(5)
      })
      .catch(console.log)
  })
  it('3. Lists the third total sum', function(done) {
    database.shoppersWhoHaveOrdered()
      .then((shoppersAndOrders) => {
        expect(shoppersAndOrders.rows[2].name).to.equal('samsam')
        done()
      })
      .catch(console.log)
  })
})
