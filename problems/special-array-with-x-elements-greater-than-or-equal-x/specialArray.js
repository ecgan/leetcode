const sortBy = require('lodash/sortBy')

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function (nums) {
  const sorted = sortBy(nums)

  for (let i = 1; i <= sorted.length; i++) {
    const num1 = sorted[nums.length - i]
    const num2 = sorted[nums.length - i - 1]

    if (
      num1 >= i &&
      (
        num2 === undefined ||
        num2 < i
      )
    ) {
      return i
    }
  }

  return -1
}

module.exports = specialArray
