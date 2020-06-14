/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let count = 0
  let element = null

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (count === 0) {
      element = num
    }

    count += (element === num)
      ? 1
      : -1
  }

  return element
}

module.exports = majorityElement
