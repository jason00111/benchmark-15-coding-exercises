const childProcess = require('child_process')

const numberGuessProgram1 = childProcess.spawn('node', ['1.js'])
const numberGuessProgram2 = childProcess.spawn('node', ['1.js'])


numberGuessProgram1.stdout.on('data', (output) => {
  numberGuessProgram1.stdin.write('exit\n')
})

numberGuessProgram1.on('close', () => {
  console.log('Program exits when \'exit\' is entered')
})


let currentGuess = 50
let wonOnce = false

numberGuessProgram2.stdout.on('data', output => {
  if (output.toString().includes('Guess')) {
    currentGuess = 50
    numberGuessProgram2.stdin.write(`${currentGuess}\n`)
  } else if (output.toString().includes('high')) {
    currentGuess--
    numberGuessProgram2.stdin.write(`${currentGuess}\n`)
  } else if (output.toString().includes('low')) {
    currentGuess++
    numberGuessProgram2.stdin.write(`${currentGuess}\n`)
  } else if (output.toString().includes('win')) {
    if (!wonOnce) {
      wonOnce = true
      console.log('It is possible to win')
    } else {
      console.log('It is possible to play again and win a second time')
      numberGuessProgram2.stdin.write('exit\n')
    }
  }
})
