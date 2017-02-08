const assert = require('assert')

const fibonacciBases = require('./4.js')

assert(typeof fibonacciBases('decimal 16') === 'string')
assert(typeof fibonacciBases('fib 11111') === 'string')

assert(fibonacciBases('decimal 16') === '1001000')
assert(fibonacciBases('decimal 31') === '10100100')

assert(fibonacciBases('fib 10') === '1')
assert(fibonacciBases('fib 1') === '1')
assert(fibonacciBases('fib 11111') === '12')

console.log('All tests passed')
