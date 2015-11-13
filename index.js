var internalCompose = function (args) {
  var P = compose.Promise || Promise

  return function (initialValue) {
    var chain = P.resolve(initialValue)
    var i, j

    for (i = 0, j = args.length; i < j; i++)
      chain = chain.then(args[i])

    return chain
  }
}

/**
 * Compose an arbitrary number of functions that accept one argument and return
 * either a value or a Promise.
 *
 * @param {...Function}
 * @return {Function}
 */
function compose () {
  return internalCompose(arguments)
}

compose.right = function () {
  return internalCompose(Array.prototype.reverse.call(arguments))
}

module.exports = compose
