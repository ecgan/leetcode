const sortedIndexOf = require('lodash/sortedIndexOf')

const getSplitIndex = (nums) => {
  const startValue = nums[0]
  const endValue = nums[nums.length - 1]

  if (startValue <= endValue) {
    return nums.length
  }

  let leftIdx = 0
  let rightIdx = nums.length

  while (rightIdx > leftIdx) {
    const mid = Math.floor((leftIdx + rightIdx) / 2)

    if (nums[mid] >= startValue) {
      leftIdx = mid + 1
    } else {
      rightIdx = mid
    }
  }

  return leftIdx
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const idx = getSplitIndex(nums)

  if (target >= nums[0]) {
    const sorted = nums.splice(0, idx)
    return sortedIndexOf(sorted, target)
  }

  const sorted = nums.splice(idx)
  const foundIndex = sortedIndexOf(sorted, target)

  return (foundIndex === -1)
    ? foundIndex
    : foundIndex + idx
}

module.exports = search
