const brailleKey = {
  'O.\n..\n..': 'a',
  'O.\nO.\n..': 'b',
  'OO\n..\n..': 'c',
  'OO\n.O\n..': 'd',
  'O.\n.O\n..': 'e',
  'OO\nO.\n..': 'f',
  'OO\nOO\n..': 'g',
  'O.\nOO\n..': 'h',
  '.O\nO.\n..': 'i',
  '.O\nOO\n..': 'j',
  'O.\n..\nO.': 'k',
  'O.\nO.\nO.': 'l',
  'OO\n..\nO.': 'm',
  'OO\n.O\nO.': 'n',
  'O.\n.O\nO.': 'o',
  'OO\nO.\nO.': 'p',
  'OO\nOO\nO.': 'q',
  'O.\nOO\nO.': 'r',
  '.O\nO.\nO.': 's',
  '.O\nOO\nO.': 't',
  'O.\n..\nOO': 'u',
  'O.\nO.\nOO': 'v',
  '.O\nOO\n.O': 'w',
  'OO\n..\nOO': 'x',
  'OO\n.O\nOO': 'y',
  'O.\n.O\nOO': 'z',
}

const brailleStringToArray = brailleString => {
  const lines = brailleString.split('\n')
  const separatedLines = lines.map(line => line.split(' '))
  return separatedLines.reduce((accumulator, line) =>
    accumulator.map((character, index) => character + '\n' + line[index])
  )
}

const arrayToString = array => array.join('')

const translateBrailleArray = brailleArray => brailleArray.map(brailleCharacter => brailleKey[brailleCharacter])

const readBraille = brailleString =>  arrayToString(translateBrailleArray(brailleStringToArray(brailleString)))

module.exports = {brailleStringToArray, readBraille}
