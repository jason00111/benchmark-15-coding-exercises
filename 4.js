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

function decimalToFibonacci (number) {
}
