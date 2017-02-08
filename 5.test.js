const assert = require('assert')

const disemvowel = require('./5')

assert(disemvowel('i am groot') === 'mgrt')

console.log('All tests passed')
