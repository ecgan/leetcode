const decreaseEven = (nums) => {
  let count = 0
  for (let i = 0; i < nums.length; i = i + 2) {
    if (i === 0) {
      if (nums[0] >= nums[1]) {
        count += (nums[0] - nums[1] + 1)
      }

      continue
    }

    if (i === nums.length - 1) {
      const lastIndex = nums.length - 1
      if (nums[lastIndex] >= nums[lastIndex - 1]) {
        count += (nums[lastIndex] - nums[lastIndex - 1] + 1)
      }

      continue
    }

    const target = (nums[i - 1] < nums[i + 1])
      ? nums[i - 1]
      : nums[i + 1]

    if (nums[i] >= target) {
      count += (nums[i] - target + 1)
    }
  }

  return count
}

const decreaseOdd = (nums) => {
  let count = 0
  for (let i = 1; i < nums.length; i = i + 2) {
    if (i === nums.length - 1) {
      const lastIndex = nums.length - 1
      if (nums[lastIndex] >= nums[lastIndex - 1]) {
        count += (nums[lastIndex] - nums[lastIndex - 1] + 1)
      }

      continue
    }

    const target = (nums[i - 1] < nums[i + 1])
      ? nums[i - 1]
      : nums[i + 1]

    if (nums[i] >= target) {
      count += (nums[i] - target + 1)
    }
  }

  return count
}

const movesToMakeZigzag = (nums) => {
  const countEven = decreaseEven(nums)
  const countOdd = decreaseOdd(nums)

  return Math.min(countEven, countOdd)
}

module.exports = movesToMakeZigzag
