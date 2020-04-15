/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const result = [1]

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }

  let accRight = 1
  for (let i = result.length - 1; i >= 0; i--) {
    result[i] *= accRight
    accRight *= nums[i]
  }

  return result
}

module.exports = productExceptSelf
