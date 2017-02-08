function accessWordsByIndex (string, index) {
  const arrayOfWords = splitStringIntoArrayOfWords(arrayToString(removePuncuationFromArray(stringToArray(string))))

  return arrayOfWords[index - 1] ? arrayOfWords[index - 1] : ''
}

const stringToArray = string => string.split('')

const arrayToString = array => array.join('')

const removePuncuationFromArray = array => array.filter(character =>
  /\w/.test(character) || character === ' '
)

const splitStringIntoArrayOfWords = string => string.split(' ')

module.exports = accessWordsByIndex


// rewrite using point free and compose
