const assert = require('assert')

const {formatDate} = require('./7')

assert.equal(formatDate('09#65#21'), '1965-09-21')
assert.equal(formatDate('Dec 26, 75'), '1975-12-26')
assert.equal(formatDate('15*10*1981'), '1981-10-15')
assert.equal(formatDate('1964-01-10'), '1964-01-10')
assert.equal(formatDate('01/11/55'), '1955-01-11')
assert.equal(formatDate('Mar 21, 1980'), '1980-03-21')

console.log('All tests passed')
