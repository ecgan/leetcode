const decompressRLElist = (nums) => {
  const result = []

  for (let i = 0; i < nums.length; i += 2) {
    const count = nums[i]
    const value = nums[i + 1]

    const newArr = new Array(count)
    newArr.fill(value)

    result.push(...newArr)
  }

  return result
}

module.exports = decompressRLElist
