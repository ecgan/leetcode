/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let leftIdx = 0
  let rightIdx = nums.length - 1
  let midIdx = Math.floor((leftIdx + rightIdx) / 2)

  do {
    if (nums[leftIdx] === target) return leftIdx
    if (nums[rightIdx] === target) return rightIdx
    if (nums[midIdx] === target) return midIdx

    if (
      (
        target > nums[leftIdx] &&
        target > nums[midIdx] &&
        nums[leftIdx] < nums[midIdx]
      ) ||
      (
        target < nums[leftIdx] &&
        target < nums[midIdx] &&
        nums[leftIdx] < nums[midIdx]
      ) ||
      (
        target > nums[midIdx] &&
        target < nums[rightIdx] &&
        nums[midIdx] < nums[rightIdx]
      )
    ) {
      leftIdx = midIdx + 1
    } else {
      rightIdx = midIdx - 1
    }

    midIdx = Math.floor((leftIdx + rightIdx) / 2)
  } while (rightIdx > leftIdx)

  return -1
}

module.exports = search
