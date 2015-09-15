/**
 * Compose an arbitrary number of functions that accept one argument and return
 * either a value or a Promise.
 *
 * @param {...Function} functions
 * @return {Function}
 */
function compose () {
  var P = compose.Promise || Promise
  var functions = arguments

  return function (initialValue) {
    return Array.prototype.reduce.call(functions,
      function (chain, fn) { return chain.then(fn) },
    P.resolve(initialValue))
  }
}

compose.right = function () {
  return compose.apply(null, Array.prototype.reverse.call(arguments))
}

module.exports = compose
