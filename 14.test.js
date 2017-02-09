const assert = require('assert')

const {findUniqueCharacters, permutations, permutationsOfUnique} = require('./14')

assert.equal(findUniqueCharacters('helloworld'), 'hewrd')

console.log('findUniqueCharacters works')

assert.deepEqual(permutations('bar'), ['bar', 'bra', 'abr', 'arb', 'rba', 'rab'])

console.log('permutations works')

assert.deepEqual(permutationsOfUnique('bar'), ['bar', 'bra', 'abr', 'arb', 'rba', 'rab'])
assert.deepEqual(permutationsOfUnique('barb'), ['ar', 'ra'])

console.log('permutationsOfUnique works')

console.log('All tests pass')
