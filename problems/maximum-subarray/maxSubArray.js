const maxSubArray = (nums) => {
  let curMax = nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(curMax + nums[i], nums[i])
    max = Math.max(max, curMax)
  }

  return max
}

module.exports = maxSubArray
