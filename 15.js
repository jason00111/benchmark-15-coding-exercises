const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let state = 'CLOSED'

console.log('\nFinite State Gate')
console.log("Enter 'remoteClicked' or 'cycleComplete'\n")

console.log('Gate:', state)

rl.on('line', input => {
  if (input === 'exit') {
    process.exit()
  } else if (input === 'remoteClicked') {
    console.log('Remote Clicked.')
    if (state === 'CLOSED' || state === 'STOPPED_WHILE_CLOSING') {
      state = 'OPENING'
    } else if (state === 'OPEN' || state === 'STOPPED_WHILE_OPENING') {
      state = 'CLOSING'
    } else if (state === 'OPENING') {
      state = 'STOPPED_WHILE_OPENING'
    } else if (state === 'CLOSING') {
      state = 'STOPPED_WHILE_CLOSING'
    }
  } else if (input === 'cycleComplete') {
    console.log('Cycle complete.')
    if (state === 'OPENING') {
      state = 'OPEN'
    } else if (state === 'CLOSING') {
      state = 'CLOSED'
    }
  }

  console.log('Gate:', state)
})
