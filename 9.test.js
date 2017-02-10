const assert = require('assert')

const parensBGone = require('./9')

assert.equal(parensBGone('((1((23)(45)))6)'), '((1((23)(45)))6)')
assert.equal(parensBGone('(((1234)(((5)67))))'), '((1234)((5)67))')
assert.equal(parensBGone('12((3))'), '12(3)')

console.log('All tests pass')
