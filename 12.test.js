const assert = require('assert')

const stringMeAlong = require('./12')

assert.equal(stringMeAlong('ghhiiii'), 'hhiiii')
assert.equal(stringMeAlong('efgefghiiikk'), 'iiikk')

console.log('All tests pass')
