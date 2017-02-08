const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
'Dec']

function formatDate (date) {
  if (date.includes('-')) {
    return date
  } else if (date.includes('/')) {
    const dateArray = date.split('/')
    return `${fullYear(dateArray[2])}-${dateArray[0]}-${dateArray[1]}`
  } else if (date.includes('#')) {
    const dateArray = date.split('#')
    return `${fullYear(dateArray[1])}-${dateArray[0]}-${dateArray[2]}`
  } else if (date.includes('*')) {
    const dateArray = date.split('*')
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
  } else {
    months.forEach(month => {
      if (!date.includes(month)) {
        return 'Date format not recognized'
      }
    })

    const dateArray = date.split(' ')
    dateArray[1] = dateArray[1].slice(0, 2)

    if (dateArray[2].length === 2) {
      dateArray[2] = fullYear(dateArray[2])
    }

    dateArray[0] = monthToNumber(dateArray[0])

    return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`
  }
}

const fullYear = year => year < 50 ? `20${year}` : `19${year}`

const monthToNumber = month => months.indexOf(month) < 9
  ? '0' + (months.indexOf(month) + 1)
  : months.indexOf(month) + 1

function formatDatesInFile() {
  const fileSystem = require('fs')

  const inputFile = require('readline').createInterface({
    input: fileSystem.createReadStream('dates.txt')
  })

  fileSystem.unlink('formatted-dates.txt', () => {})

  const outputFile = fileSystem.createWriteStream('formatted-dates.txt', {
    flags: 'a'
  })

  inputFile.on('line', date => outputFile.write(formatDate(date) + '\n'))

  inputFile.on('close', () => outputFile.end())
}

module.exports = {formatDate, formatDatesInFile}
