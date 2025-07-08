/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const set = new Set(nums)

  let i = 0
  while (set.has(i)) {
    i++
  }

  return i
}

module.exports = missingNumber
