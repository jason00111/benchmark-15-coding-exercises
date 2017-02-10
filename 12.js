const stringMeAlong = string => {
  let longestSubstring = ''
  let substring

  for (let index = 0; index < string.length; index++) {
    substring = findLongestSubstringStartingAtIndex(string, index)

    if (substring.length >= longestSubstring.length) {
      longestSubstring = substring
    }
  }

  return longestSubstring
}

const findLongestSubstringStartingAtIndex = (string, startIndex) => {
  const uniqueCharacters = []
  let currentCharacter, index

  for (index = startIndex; uniqueCharacters.length < 3 && index <= string.length; index++) {
    currentCharacter = string.charAt(index)

    if (uniqueCharacters.indexOf(currentCharacter) === -1) {
      uniqueCharacters.push(currentCharacter)
    }
  }

  return string.slice(startIndex, index - 1)
}

module.exports = stringMeAlong
