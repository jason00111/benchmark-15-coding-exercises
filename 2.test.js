const childProcess = require('child_process')

const numberGuessProgram1 = childProcess.spawn('node', ['2.js'])
const numberGuessProgram2 = childProcess.spawn('node', ['2.js'])

let testsPassed = 0

numberGuessProgram1.stdout.on('data', (output) => {
  numberGuessProgram1.stdin.write('exit\n')
})

numberGuessProgram1.on('close', () => {
  console.log('Program exits when \'exit\' is entered')
  testsPassed++
})

numberGuessProgram2.stdout.on('data', output => {
  const outputString = output.toString()
  if (outputString.includes('Scrabble')) {
    numberGuessProgram2.stdin.write(`AERETOXMYCNS_B\n`)
  } else if (outputString.includes('Remaining')) {

    if (!outputString.includes('12')
      && !outputString.includes('11')
      && !outputString.includes('6')
    ) {
      console.log('Output does not include empty bins')
      testsPassed++
    }

    const outputArray = outputString.split('\n')

    if (
      outputArray.filter(line => line.includes(10)).includes('E')
        && outputArray.filter(line => line.includes(9)).includes('I')
        && outputArray.filter(line => line.includes(8)).includes('A')
        && outputArray.filter(line => line.includes(7)).includes('O')
        && outputArray.filter(line => line.includes(5)).includes('R')
        && outputArray.filter(line => line.includes(5)).includes('N')
        && outputArray.filter(line => line.includes(5)).includes('T')
        && outputArray.filter(line => line.includes(4)).includes('U')
        && outputArray.filter(line => line.includes(4)).includes('L')
        && outputArray.filter(line => line.includes(4)).includes('D')
        && outputArray.filter(line => line.includes(3)).includes('G')
        && outputArray.filter(line => line.includes(3)).includes('S')
        && outputArray.filter(line => line.includes(2)).includes('P')
        && outputArray.filter(line => line.includes(2)).includes('H')
        && outputArray.filter(line => line.includes(2)).includes('F')
        && outputArray.filter(line => line.includes(2)).includes('V')
        && outputArray.filter(line => line.includes(2)).includes('W')
        && outputArray.filter(line => line.includes(1)).includes('B')
        && outputArray.filter(line => line.includes(1)).includes('Y')
        && outputArray.filter(line => line.includes(1)).includes('J')
        && outputArray.filter(line => line.includes(1)).includes('K')
        && outputArray.filter(line => line.includes(1)).includes('M')
        && outputArray.filter(line => line.includes(1)).includes('Q')
        && outputArray.filter(line => line.includes(1)).includes('C')
        && outputArray.filter(line => line.includes(1)).includes('Z')
        && outputArray.filter(line => line.includes(1)).includes('_')
        && outputArray.filter(line => line.includes(0)).includes('X')
      ) {
        console.log('Program returns correct output for input \'AERETOXMYCNS_B\'')
        testsPassed++
      }
  }
})
