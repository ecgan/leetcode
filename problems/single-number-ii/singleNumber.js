/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let bit1 = 0
  let bit2 = 0

  for (let i = 0; i < nums.length; i++) {
    bit1 = (bit1 ^ nums[i]) & ~bit2
    bit2 = (bit2 ^ nums[i]) & ~bit1
  }

  return bit1
}

module.exports = singleNumber
