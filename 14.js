const findUniqueCharacters = string => {
  const allCharacters = []
  const repeatedCharacters = []

  const array = stringToArray(string)

  array.forEach(character => {
    if (allCharacters.indexOf(character) === -1) {
      allCharacters.push(character)
    } else if (repeatedCharacters.indexOf(character) === -1) {
      repeatedCharacters.push(character)
    }
  })

  const uniqueCharacters = array.filter(character => repeatedCharacters.indexOf(character) === -1)

  return arrayToString(uniqueCharacters)
}

const stringToArray = string => string.split('')

const arrayToString = array => array.join('')

const permutations = inputString => {
  const result = []

  if (inputString.length === 1) {
    result.push(inputString)
  } else {
    stringToArray(inputString).forEach((character, index, array) => {
      permutations(removeCharacterAtIndex(inputString, index)).forEach(permutation => {
        result.push(character + permutation)
      })
    })
  }

  return result
}

const removeCharacterAtIndex = (string, index) => {
  const array = stringToArray(string)
  delete array[index]
  return arrayToString(array)
}

const permutationsOfUnique = string => permutations(findUniqueCharacters(string))

module.exports = {findUniqueCharacters, permutations, permutationsOfUnique}
