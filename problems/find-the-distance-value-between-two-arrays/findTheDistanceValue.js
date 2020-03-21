const sortBy = require('lodash/sortBy')
const sortedIndex = require('lodash/sortedIndex')

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
  const sorted2 = sortBy(arr2)

  let count = 0
  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i]
    const index = sortedIndex(sorted2, num)

    if (index > 0) {
      if (Math.abs(sorted2[index - 1] - num) <= d) {
        continue
      }
    }

    if (index < sorted2.length) {
      if (Math.abs(num - sorted2[index]) <= d) {
        continue
      }
    }

    count++
  }

  return count
}

module.exports = findTheDistanceValue
