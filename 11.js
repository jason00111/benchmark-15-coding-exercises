const Lairotcaf = n => {
  let factorial = 1
  let index = 1

  while (factorial <= n) {
    factorial *= ++index
  }

  return n === factorial / index ? index - 1 : null
}

module.exports = Lairotcaf
