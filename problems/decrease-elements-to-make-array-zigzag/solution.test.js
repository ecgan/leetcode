const movesToMakeZigzag = require('./solution')

test('Example 1', () => {
  const nums = [1, 2, 3]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const nums = [9, 6, 1, 6, 2]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(4)
})

test('With multiple same contiguous values', () => {
  const nums = [10, 4, 4, 10, 10, 6, 2, 3]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(13)
})
