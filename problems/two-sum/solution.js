const twoSum = (nums, target) => {
  const valueIndexMap = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - nums[i]
    const x = valueIndexMap[complement]

    if (x !== undefined) {
      return [x, i]
    }

    valueIndexMap[num] = i
  }

  return []
}

module.exports = twoSum
