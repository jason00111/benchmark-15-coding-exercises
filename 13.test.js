const assert = require('assert')

const {readBraille, brailleStringToArray} = require('./13')

const brailleString =
`O. O. O. O. O. .O O. O. O. OO
OO .O O. O. .O OO .O OO O. .O
.. .. O. O. O. .O O. O. O. ..`

const brailleArray =[
  'O.\nOO\n..',
  'O.\n.O\n..',
  'O.\nO.\nO.',
  'O.\nO.\nO.',
  'O.\n.O\nO.',
  '.O\nOO\n.O',
  'O.\n.O\nO.',
  'O.\nOO\nO.',
  'O.\nO.\nO.',
  'OO\n.O\n..'
]

assert.deepEqual(brailleStringToArray(brailleString), brailleArray)

console.log('brailleStringToArray works')

assert.equal(readBraille(brailleString), 'helloworld')

console.log('readBraille works')

console.log('All tests pass')
