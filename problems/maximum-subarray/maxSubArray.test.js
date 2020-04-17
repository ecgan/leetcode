const maxSubArray = require('./maxSubArray')

test('Example 1', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

  const result = maxSubArray(nums)

  expect(result).toBe(6)
})

test('Example 2', () => {
  const nums = [-3, 2, 4, -3]

  const result = maxSubArray(nums)

  expect(result).toBe(6)
})
