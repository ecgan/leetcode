/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  const sumCountMap = { 0: 1 }
  let sum = 0
  let num = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    const diff = sum - k
    const count = sumCountMap[diff]
    if (count) {
      num += count
    }

    if (!sumCountMap[sum]) {
      sumCountMap[sum] = 1
    } else {
      sumCountMap[sum]++
    }
  }

  return num
}

module.exports = subarraySum
