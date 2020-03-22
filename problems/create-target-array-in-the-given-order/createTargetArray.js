/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function (nums, index) {
  const target = []

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const idx = index[i]

    if (target[idx] === undefined) {
      target[idx] = num
    } else {
      target.splice(idx, 0, num)
    }
  }

  return target
}

module.exports = createTargetArray
