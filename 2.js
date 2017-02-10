const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const isValidTile = character => {
  const UPPERCASE_A_CODE = 65
  const UPPERCASE_B_CODE = 90
  const UNDERSCORE_CODE = 95

  if (typeof character !== 'string') {
    return false
  }

  const characterCode = character.charCodeAt(0)

  return (
    characterCode >= UPPERCASE_A_CODE && characterCode <= UPPERCASE_B_CODE
  ) || characterCode === UNDERSCORE_CODE
}

const tilesRemaining = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
  _: 2
}

console.log(`
Scrabble Tiles Reamining Calculator

Enter uppercase characters representing the tiles that have been played.
'_' represents a blank tile.
Example: AERETOXMYCNS_B
(type exit to exit)
`)

readline.on('line', input => {
  if (input === 'exit') process.exit()

  else {
    input.toString().split('').forEach(tile => {
      if (!isValidTile(tile)) {
        console.error(`\nERROR: '${tile}' is not a valid tile.`
          + `\nPlease use uppercase characters A-Z or _`)
      } else if (tilesRemaining[tile] > 0) {
        tilesRemaining[tile]--
      } else {
        console.error(`\nERROR: Cannot remove tile '${tile}' `
          + `since there are no more remaining.`)
      }
    })

    const histogram = Array(13).fill(null).map(() => [])

    for (let tile in tilesRemaining) {
      histogram[tilesRemaining[tile]].push(tile)
    }

    histogram.reverse()

    console.log('\nRemaining Tiles\n')

    histogram.forEach((binArray, frequency) => {
      if (binArray.length !== 0)
        console.log(`${12 - frequency}:`, binArray.join(', '))
    })

    console.log('\nEnter more tiles that have '
      + 'been played to see the remaining tiles.\n')
  }
})
