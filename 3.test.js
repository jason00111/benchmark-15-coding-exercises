const assert = require('assert')

const stringIndices = require('./3.js')

const string = 'Catch me outside, how about that?'

assert(stringIndices(string, 3) === 'outside')

console.log('Test passes!')
