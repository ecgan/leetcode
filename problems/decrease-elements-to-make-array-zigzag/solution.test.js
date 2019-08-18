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

test('With all same values', () => {
  const nums = [4, 4, 4, 4]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(2)
})

test('values at odd index are smaller than values at even index', () => {
  const nums = [4, 3, 4, 3]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(0)
})

test('values at even index are smaller than values at odd index', () => {
  const nums = [3, 4, 3, 4]

  const result = movesToMakeZigzag(nums)

  expect(result).toBe(0)
})
