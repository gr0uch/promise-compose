var compose = require('./')
var assert = require('assert')
var t = require('tapdance')
var pass = t.pass
var run = t.run
var success = 'expected value is correct'

function double (x) { return x * 2 }
function square (x) { return x * x }
function root (x) { return Promise.resolve(Math.sqrt(x)) }

run(function () {
  return compose(double, square, root)(2)
  .then(function (value) {
    pass(function () { assert.equal(value, 4) }, success)
  })
})

run(function () {
  return compose(root, double, square)(4)
  .then(function (value) {
    pass(function () { assert.equal(value, 16) }, success)
  })
})

run(function () {
  return compose(double, root, square)(4.5)
  .then(function (value) {
    pass(function () { assert.equal(value, 9) }, success)
  })
})

run(function () {
  return compose.right(double, root, square)(3)
  .then(function (value) {
    pass(function () { assert.equal(value, 6) }, success)
  })
})
