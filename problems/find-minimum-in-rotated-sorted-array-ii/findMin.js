/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let min = Number.MAX_SAFE_INTEGER
  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)

    min = Math.min(min, nums[lo], nums[mid], nums[hi])

    if (nums[mid] > nums[hi]) {
      lo = mid + 1
    } else if (nums[mid] < nums[lo]) {
      hi = mid - 1
    } else {
      lo++
      hi--
    }
  }

  return min
}

module.exports = findMin
