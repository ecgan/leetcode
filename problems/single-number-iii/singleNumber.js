/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  let diff = 0
  for (const num of nums) {
    diff ^= num
  }

  diff &= -diff

  const result = [0, 0]
  for (const num of nums) {
    if (num & diff) {
      result[0] ^= num
    } else {
      result[1] ^= num
    }
  }

  return result
}

module.exports = singleNumber
