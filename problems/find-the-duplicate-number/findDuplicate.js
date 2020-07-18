/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  let slow = nums[0]
  let fast = nums[nums[0]]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }

  fast = 0
  while (fast !== slow) {
    fast = nums[fast]
    slow = nums[slow]
  }

  return slow
}

module.exports = findDuplicate
