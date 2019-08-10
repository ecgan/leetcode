const isMajorityElement = (nums, target) => {
  const minimum = nums.length / 2
  let count = 0

  for (const value of nums) {
    if (value === target) {
      count += 1
    }

    if (value > target) {
      break
    }
  }

  return (count > minimum)
}

module.exports = isMajorityElement
