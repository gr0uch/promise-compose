# promise-compose

[![Build Status](https://img.shields.io/travis/0x8890/promise-compose/master.svg?style=flat-square)](https://travis-ci.org/0x8890/promise-compose)
[![npm Version](https://img.shields.io/npm/v/promise-compose.svg?style=flat-square)](https://www.npmjs.com/package/promise-compose)
[![License](https://img.shields.io/npm/l/promise-compose.svg?style=flat-square)](https://raw.githubusercontent.com/0x8890/promise-compose/master/LICENSE)

Compose an arbitrary number of functions that accept one argument and return either a value or a Promise.

```
$ npm install promise-compose
```


## Usage

```js
import assert from 'assert'
import compose from 'promise-compose'

const double = x => x * 2
const square = x => x * x
const root = x => new Promise(resolve => resolve(Math.sqrt(x)))

compose(root, double, square)(9)
.then(result => assert.equal(result, 36))
```

This library assumes that `Promise` is a global that implements the ES6 Promise specification. If you're not sure if the environment has `Promise` or you want to use something else, simply override `compose.Promise`.


## License

This software is licensed under the [MIT license](https://raw.githubusercontent.com/0x8890/promise-compose/master/LICENSE).
