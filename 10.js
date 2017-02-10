const resolveSymlinks = input => {
  const inputArray = input.split('\n')
  let symlinks = []
  let path = inputArray[inputArray.length - 1]

  for (let index = 1; index <= inputArray[0]; index++) {
    symlinks.push(inputArray[index])
  }

  symlinks = symlinks.map(symlink => symlink.split(':'))

  symlinks.forEach(symlink => {
    const symlinkRegExp = new RegExp(symlink[0])
    let actualPath = symlink[1]
    if (actualPath.slice(-1) === '/') actualPath = actualPath.slice(0, -1)
    path = path.replace(symlinkRegExp, actualPath)
  })

  return path
}


module.exports = resolveSymlinks
