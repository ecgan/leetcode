const flatten = require('lodash/flatten')
const sortedIndex = require('lodash/sortedIndex')

const removeInterval = (intervals, toBeRemoved) => {
  const array = flatten(intervals)
  const idx0 = sortedIndex(array, toBeRemoved[0])
  const idx1 = sortedIndex(array, toBeRemoved[1])

  const insertData = []

  if (
    (idx0 % 2 === 0 && toBeRemoved[0] > array[idx0]) ||
    (idx0 % 2 === 1 && toBeRemoved[0] < array[idx0])
  ) {
    insertData.push(toBeRemoved[0])
  }

  if (
    (idx1 % 2 === 0 && toBeRemoved[1] > array[idx1]) ||
    (idx1 % 2 === 1 && toBeRemoved[1] < array[idx1])
  ) {
    insertData.push(toBeRemoved[1])
  }

  array.splice(idx0, (idx1 - idx0), ...insertData)

  const result = []
  for (let i = 0; i < array.length; i += 2) {
    result.push([array[i], array[i + 1]])
  }

  return result
}

module.exports = removeInterval
