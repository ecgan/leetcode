/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  let lo = 0
  let hi = nums.length - 1

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    const midOther = (mid % 2 === 0)
      ? mid + 1
      : mid - 1

    if (nums[mid] === nums[midOther]) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return nums[lo]
}

module.exports = singleNonDuplicate
