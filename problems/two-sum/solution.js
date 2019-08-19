const twoSum = (nums, target) => {
  const valueIndexMap = {}

  let result = null

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - nums[i]
    const x = valueIndexMap[complement]

    if (x !== undefined) {
      result = [x, i]
      break
    }

    valueIndexMap[num] = i
  }

  return result
}

module.exports = twoSum
