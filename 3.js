module.exports = function (string, index) {
  const stringArray = string.split('')

  noPunctuationArray = stringArray.filter(character =>
    /\w/.test(character) || character === ' '
  )

  const noPunctuationString = noPunctuationArray.join('').split(' ')

  return noPunctuationString[index - 1] ? noPunctuationString[index - 1] : ''
}
