/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let idx = nums.length - 1

  for (let i = nums.length - 2; i >= 0; i--) {
    const maxJump = nums[i]
    const minJump = idx - i

    if (maxJump >= minJump) {
      idx = i
    }
  }

  return (idx === 0)
}

module.exports = canJump
