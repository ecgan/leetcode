/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }

  return nums
}

module.exports = runningSum
