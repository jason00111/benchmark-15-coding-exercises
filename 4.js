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

function decimalToFibonacci (inputNumber) {
  let number = inputNumber
  const result = []

  fib.reset()

  findBiggestFibDivisor(number)

  number -= fib.prev()
  result.push(1)

  while (true) {
    if (number / fib.prev() > 1) {
      number -= fib.current
      result.push(1)
    } else {
      result.push(0)
    }

    if (fib.current === 1 && fib.previous === 0) {
      result.push(0)
      break
    }
  }

  return result
}

function findBiggestFibDivisor (number) {
  while (number / fib.next() > 1) {}
  fib.prev()
  fib.prev()
}

const fib = {
  previous: 0,
  current: 1,
  reset: function () {
    this.previous = 0
    this.current = 1
  },
  next: function () {
    const current = this.current
    const next = this.current + this.previous
    this.previous = this.current
    this.current = next
    return current
  },
  prev: function () {
    const current = this.current
    if (this.current === 1 && this.previous === 0) {
      return current
    }
    const prevPrev = this.current - this.previous
    this.current = this.previous
    this.previous = prevPrev
    return current
  }
}

function fibonacciToDecimal (number) {
  const numberArray = number.toString().split('')

  fib.reset()

  return numberArray.reduceRight(
    (accumulator, currentDigit) => accumulator + currentDigit * fib.next(),
    0
  )
}
