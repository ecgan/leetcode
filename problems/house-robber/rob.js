const rob = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let amountP2 = nums[0]
  let amountP1 = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    const cur = Math.max(
      amountP2 + nums[i],
      amountP1
    )

    amountP2 = amountP1
    amountP1 = cur
  }

  return Math.max(amountP2, amountP1)
}

module.exports = rob
