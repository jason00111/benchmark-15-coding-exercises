const Lairotcaf = require('./11')

const assert = require('assert')

const test = require('test')

// Lairotcaf(n) = ¡n

// 1	1
// 2	2
// 6	3
// 24	4
// 120	5
// 720	6
// 5 040	7
// 40 320	8
// 362 880	9
// 3 628 800	10

// assert(¡1, 1)
// assert(¡2, 2)
// assert(¡6, 3)
// assert(¡2, 4)
// assert(¡120, 5)
// assert(¡720, 6)
// assert(¡5 040, 7)
// assert(¡40 32, 8)
// assert(¡362 880, 9)
// assert(¡3 628 800, 10)


assert.equal()


console.log('before')
assert(Lairotcaf(1), 1)
assert(Lairotcaf(2), 2)
console.log('after')
assert(Lairotcaf(6), 3)
assert(Lairotcaf(2), 4)
assert(Lairotcaf(120), 5)
assert(Lairotcaf(720), 6)
assert(Lairotcaf(5040), 7)
assert(Lairotcaf(4032), 8)
assert(Lairotcaf(362880), 9)
assert(Lairotcaf(3628800), 10)

console.log('all tests pass')

// test({
//   type_this_into_console: '!!720',
//   output_to_console: '6'
// })
