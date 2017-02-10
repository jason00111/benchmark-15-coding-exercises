const disemvowel = string => arrayToString(filterOutSpaces(filterOutVowels(stringToArray(string))))

const stringToArray = string => string.split('')

const arrayToString = array => array.join('')

const filterOutVowels = characters => characters.filter(
  character => character !== 'a'
            && character !== 'e'
            && character !== 'i'
            && character !== 'o'
            && character !== 'u'
)

const filterOutSpaces = characters => characters.filter(
  character => character !== ' '
)

module.exports = disemvowel
