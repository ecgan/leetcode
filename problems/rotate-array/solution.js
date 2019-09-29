const rotate = (nums, k) => {
  const endPart = nums.splice(nums.length - k)
  nums.unshift(...endPart)
}

module.exports = rotate
