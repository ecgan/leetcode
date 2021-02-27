/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      min = Math.min(min, nums[i])
      max = Math.max(max, nums[i - 1])
    }
  }

  let left
  for (left = 0; left < nums.length; left++) {
    if (min < nums[left]) {
      break
    }
  }

  let right
  for (right = nums.length - 1; right >= 0; right--) {
    if (max > nums[right]) {
      break
    }
  }

  return (left < right)
    ? right - left + 1
    : 0
}

module.exports = findUnsortedSubarray
