const canJump = require('./canJump')

test('Example 1', () => {
  const nums = [2, 3, 1, 1, 4]

  const result = canJump(nums)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const nums = [3, 2, 1, 0, 4]

  const result = canJump(nums)

  expect(result).toBe(false)
})
