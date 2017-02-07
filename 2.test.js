const childProcess = require('child_process')

const testInstance1 = childProcess.spawn('node', ['2.js'])
const testInstance2 = childProcess.spawn('node', ['2.js'])
const testInstance3 = childProcess.spawn('node', ['2.js'])
const testInstance4 = childProcess.spawn('node', ['2.js'])

let testsPassed = 0

testInstance1.stdout.on('data', (output) => {
  testInstance1.stdin.write('exit\n')
})

testInstance1.on('close', () => {
  console.log('Program exits when \'exit\' is entered')
  testsPassed++
})

let combinedOutputString = ''

testInstance2.stdout.on('data', output => {
  const outputString = output.toString()

  if (outputString.includes('Scrabble')) {
    testInstance2.stdin.write(`AERETOXMYCNS_B\n`)
  } else if (outputString.includes('Enter')) {
    combinedOutputString += outputString

    if (!combinedOutputString.includes('12')
      && !combinedOutputString.includes('11')
      && !combinedOutputString.includes('6')
    ) {
      console.log('Output does not include empty bins')
      testsPassed++
    }

    const outputArray = combinedOutputString.split('\n')

    if (
      outputArray.filter(line => line.includes(10))[0].includes('E')
        && outputArray.filter(line => line.includes(9))[0].includes('I')
        && outputArray.filter(line => line.includes(8))[0].includes('A')
        && outputArray.filter(line => line.includes(7))[0].includes('O')
        && outputArray.filter(line => line.includes(5))[0].includes('R')
        && outputArray.filter(line => line.includes(5))[0].includes('N')
        && outputArray.filter(line => line.includes(5))[0].includes('T')
        && outputArray.filter(line => line.includes(4))[0].includes('U')
        && outputArray.filter(line => line.includes(4))[0].includes('L')
        && outputArray.filter(line => line.includes(4))[0].includes('D')
        && outputArray.filter(line => line.includes(3))[0].includes('G')
        && outputArray.filter(line => line.includes(3))[0].includes('S')
        && outputArray.filter(line => /^2/.test(line))[0].includes('P')
        && outputArray.filter(line => /^2/.test(line))[0].includes('H')
        && outputArray.filter(line => /^2/.test(line))[0].includes('F')
        && outputArray.filter(line => /^2/.test(line))[0].includes('V')
        && outputArray.filter(line => /^2/.test(line))[0].includes('W')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('B')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('Y')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('J')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('K')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('M')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('Q')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('C')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('Z')
        && outputArray.filter(line => /^1:/.test(line))[0].includes('_')
        && outputArray.filter(line => /^0/.test(line))[0].includes('X')
    ) {
      console.log('Program returns correct output for input \'AERETOXMYCNS_B\'')
      testsPassed++
    }

    testInstance2.stdin.write('exit\n')

  } else if (outputString.includes(':')) {
    combinedOutputString += outputString
  }
})

testInstance3.stdout.on('data', (output) => {
  const outputString = output.toString()

  if (outputString.includes('Scrabble')) {
    testInstance3.stdin.write(`a\n`)
  } else if (outputString.includes('ERROR: \'a\'')) {
    console.log('Returns an error if a lowercase letter is entered')
    testsPassed++
    testInstance3.stdin.write(`?\n`)
  } else if (outputString.includes('ERROR: \'?\'')) {
    console.log('Returns an error if a non alphabetic character is entered')
    testsPassed++
    testInstance3.stdin.write('exit\n')
  }
})


/// THIS TEST IS FAILING, I DON'T KNOW WHY
testInstance4.stdout.on('data', (output) => {
  const outputString = output.toString()

  console.log('outputString:', outputString)

  if (outputString.includes('Scrabble')) {
    testInstance4.stdin.write(`ZZ\n`)
  } else if (outputString.includes('ERROR:')) {
    console.log('Returns an error if user tries to remove a tile when there are none left')
    testsPassed++

    if (testsPassed === 6) {
      console.log('All tests passed')
    } else {
      console.log('Some tests failed')
    }

    testInstance4.stdin.write('exit\n')
  }
})
