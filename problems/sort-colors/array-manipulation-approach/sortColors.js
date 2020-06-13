/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  const total = nums.length
  let count = 0
  let i = 0

  while (count < total) {
    const num = nums[i]

    if (num === 0) {
      nums.splice(i, 1)
      nums.unshift(num)
      i++
    } else if (num === 2) {
      nums.splice(i, 1)
      nums.push(num)
    } else {
      i++
    }

    count++
  }
}

module.exports = sortColors
