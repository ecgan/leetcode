/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let processed = 0
  let i = 0

  while (processed < nums.length) {
    if (nums[i] === 0) {
      const zero = nums.splice(i, 1)[0]
      nums.push(zero)
    } else {
      i++
    }

    processed++
  }
}

module.exports = moveZeroes
