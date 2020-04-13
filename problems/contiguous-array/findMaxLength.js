/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
  let max = 0
  let sum = 0
  const sumIndexMap = { 0: -1 }

  for (let i = 0; i < nums.length; i++) {
    sum = (nums[i] === 0)
      ? sum - 1
      : sum + 1

    if (sumIndexMap[sum] === undefined) {
      sumIndexMap[sum] = i
    }

    max = Math.max(max, i - sumIndexMap[sum])
  }

  return max
}

module.exports = findMaxLength
