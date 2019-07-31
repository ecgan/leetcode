const singleNumber = (nums) => {
  return nums.reduce((acc, cur) => {
    return acc ^ cur
  }, 0)
}

module.exports = singleNumber
