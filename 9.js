const findMatchingParenIndex = (string, inputIndex) => {
  let level = 1
  let index = inputIndex

  if (string.charAt(index) === '(') {
    index++

    while(level !== 0) {
      if (string.charAt(index) === ')') {
        level--
      } else if (string.charAt(index) === '(') {
        level++
      }
      index++
    }

    index--
  } else if (string.charAt(index) === ')') {
    index--

    while(level !== 0) {
      if (string.charAt(index) === ')') {
        level++
      } else if (string.charAt(index) === '(') {
        level--
      }
      index--
    }

    index++
  }

  return index
}

const parensBGone = string => {
  let extraParenIndices = []

  for (let index = 0; index < string.length; index++) {
    if (isExtraParen(string, index)) {
      extraParenIndices.push(index)
    }
  }

  return removeCharactersAt(string, extraParenIndices)
}

const removeCharactersAt = (string, extraParenIndices) => {
  const array = string.split('')
  extraParenIndices.forEach(index => delete array[index])
  return array.join('')
}

const isExtraParen = (string, index) => {
  if (string.charAt(index) === ')') {
    return isExtraParen(string, findMatchingParenIndex(string, index))
  } else if (string.charAt(index) === '(') {
    const matchingIndex = findMatchingParenIndex(string, index)

    if (string.charAt(index + 1) === '(') {
      const nextMatchingIndex = findMatchingParenIndex(string, index + 1)
      if (matchingIndex - 1 === nextMatchingIndex) {
        return true
      }
    }
  }
  return false
}

module.exports = parensBGone
