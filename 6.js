function findPath (jsonObject, valueToFind) {
  const object = JSON.parse(jsonObject)

  const look = lookForValue(object, valueToFind)

  if (look.found) {
    return look.path.reverse().join(' -> ')
  } else {
    return '4chan not found'
  }
}

function lookForValue (searchTarget, valueToFind) {
  if (searchTarget === '4chan') {
    return {found: true, path: []}
  } else if (typeof searchTarget === 'object') {
    let look
    for (let key in searchTarget) {
      look = lookForValue(searchTarget[key], valueToFind)
      look.path.push(key)
      if (look.found) {
        return {found: true, path: look.path}
      }
    }
  }
  return {found: false, path: []}
}

module.exports = findPath
