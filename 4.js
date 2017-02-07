function fibonacciBases(inputString) {
  const inputArray = inputString.split(' ')

  let result

  if (inputArray[0] === 'decimal') {
    result = decimalToFibonacci(inputArray[1])
  } else if (inputArray[0] === 'fib') {
    result = fibonacciToDecimal(inputArray[1])
  }

  return result
}

const fib = {
  previous: 0,
  current: 1,
  reset: function () {
    this.previous = 0
    this.current = 1
  },
  cur: function () {
    return this.current
  },
  next: function () {
    const next = this.current + this.previous
    this.previous = this.current
    this.current = next
    return this.current
  },
  prev: function () {
    if (this.current === 1 && this.previous === 0) {
      return this.previous
    }
    const prevPrev = this.current - this.previous
    this.current = this.previous
    this.previous = prevPrev
    return this.current
  }
}

function fibonacciToDecimal (number) {
  const digitArray = number.toString().split('')

  fib.reset()

  let firstTime = true

  return digitArray.reduceRight(
    (accumulator, currentDigit) => {
      if (firstTime) {
        firstTime = false
        return accumulator + currentDigit * fib.cur()
      } else {
        return accumulator + currentDigit * fib.next()
      }
    },
    0
  )
}

function decimalToFibonacci (inputNumber) {
  let number = inputNumber

  const result = []

  fib.reset()

  while (number / fib.next() >= 1) {}

  while (fib.prev() !== 0) {
    if (number / fib.cur() >= 1) {
      number -= fib.cur()
      result.push(1)
    } else {
      result.push(0)
    }
  }

  return result.join('')
}
