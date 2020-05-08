/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function (nums) {
  let min = Number.MAX_SAFE_INTEGER
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    min = Math.min(min, sum)
  }

  return Math.max(1, (1 - min))
}

module.exports = minStartValue
