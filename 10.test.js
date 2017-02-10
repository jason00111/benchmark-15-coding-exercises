const assert = require('assert')

const resolveSymlinks = require('./10')

const input1 = `1
/home/private/documents:/stuff/urgent/docs
/home/private/documents/office`

const output1 = '/stuff/urgent/docs/office'

const input2 = `3
/bin:/usr/bin
/usr/bin:/usr/local/bin/
/usr/local/bin/log:/var/log-2017
/bin/log/lib`

const output2 = '/var/log-2017/lib'

assert(resolveSymlinks(input1) === output1)
assert(resolveSymlinks(input2) === output2)

console.log('All tests pass')
