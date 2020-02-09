const sortBy = require('lodash/sortBy')
const sortedIndexOf = require('lodash/sortedIndexOf')

const checkIfExist = (num) => {
  const sorted = sortBy(num)

  for (let i = 0; i < sorted.length - 1; i++) {
    const element = sorted[i]
    const other = (element >= 0) ? element * 2 : element / 2
    const slice = sorted.slice(i + 1)

    if (sortedIndexOf(slice, other) >= 0) {
      return true
    }
  }

  return false
}

module.exports = checkIfExist
