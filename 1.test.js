const childProcess = require('child_process')

const testInstance1 = childProcess.spawn('node', ['1.js'])
const testInstance2 = childProcess.spawn('node', ['1.js'])

let testsPassed = 0

testInstance1.stdout.on('data', (output) => {
  testInstance1.stdin.write('exit\n')
})

testInstance1.on('close', () => {
  console.log('Program exits when \'exit\' is entered')
  testsPassed++
})

let currentGuess = 50,
  wonOnce = false,
  guessedOnce = false

testInstance2.stdout.on('data', output => {
  if (output.toString().includes('Guess')) {
    currentGuess = 50
    testInstance2.stdin.write(`${currentGuess}\n`)
  } else if (output.toString().includes('high')) {
    currentGuess--
    testInstance2.stdin.write(`${currentGuess}\n`)
    if (!guessedOnce) {
      console.log('It is possible to guess a second time')
      testsPassed++
      guessedOnce = true
    }
  } else if (output.toString().includes('low')) {
    currentGuess++
    testInstance2.stdin.write(`${currentGuess}\n`)
    if (!guessedOnce) {
      console.log('It is possible to guess a second time')
      testsPassed++
      guessedOnce = true
    }
  } else if (output.toString().includes('win')) {
    if (!wonOnce) {
      wonOnce = true
      console.log('It is possible to win')
      testsPassed++
    } else {
      console.log('It is possible to play again and win a second time')
      testsPassed++

      if (testsPassed === 4) {
        console.log('All tests passed!')
      } else {
        console.log('Some tests didn\'t pass')
      }

      testInstance2.stdin.write('exit\n')
    }
  }
})
