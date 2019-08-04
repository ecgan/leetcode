const movesToMakeZigzag = require('./solution')

test('Sample 1', () => {
  const nums = [1, 2, 3]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(2)
})

test('Sample 2', () => {
  const nums = [9, 6, 1, 6, 2]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(4)
})

test('Sample 2', () => {
  const nums = [10, 4, 4, 10, 10, 6, 2, 3]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(13)
})
