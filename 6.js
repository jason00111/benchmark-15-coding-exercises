function pathTo4chan (jsonObject) {
  const object = JSON.parse(jsonObject)

  const look = lookFor4chan(object)

  if (look.found) {
    return look.path.reverse().join(' -> ')
  } else {
    return '4chan not found'
  }
}

function lookFor4chan (input) {
  if (input === '4chan') {
    return {found: true, path: []}
  } else if (typeof input !== 'object') {
    return {found: false, path: []}
  } else {
    let look
    for (let key in input) {
      look = lookFor4chan(input[key])
      look.path.push(key)
      if (look.found) {
        return {found: true, path: look.path}
      }
    }
    return {found: false, path: []}
  }
}

module.exports = pathTo4chan
