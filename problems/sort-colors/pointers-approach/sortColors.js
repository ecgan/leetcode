const sortColors = function (nums) {
  let redPtr = 0
  while (nums[redPtr] === 0) {
    redPtr++
  }

  let bluePtr = nums.length - 1
  while (nums[bluePtr] === 2) {
    bluePtr--
  }

  let i = redPtr + 1
  while (i <= bluePtr) {
    if (nums[i] === 0) {
      [nums[i], nums[redPtr]] = [nums[redPtr], nums[i]]
      redPtr++
      i = Math.max(redPtr, i)
    } else if (nums[i] === 2) {
      [nums[i], nums[bluePtr]] = [nums[bluePtr], nums[i]]
      bluePtr--
    } else {
      i++
    }
  }
}

module.exports = sortColors
