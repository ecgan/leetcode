/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  let max = 0
  let prevCount1 = 0
  let currCount1 = 0
  let count0 = 0

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i]

    if (currNum === 0) {
      const prevNum = nums[i - 1] || 0

      if (prevNum === 0) {
        count0++
      } else {
        prevCount1 = currCount1
        currCount1 = 0
        count0 = 1
      }
    } else {
      currCount1++
      max = Math.max(max, (count0 === 1) ? (prevCount1 + currCount1) : currCount1)
    }
  }

  const lastNum = nums[nums.length - 1]
  if (lastNum === 1 && count0 === 0) {
    return currCount1 - 1
  }

  return max
}

module.exports = longestSubarray
