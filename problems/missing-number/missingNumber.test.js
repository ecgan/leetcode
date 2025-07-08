const missingNumber = require('./missingNumber')

test('Example 1', () => {
  const nums = [3, 0, 1]

  const result = missingNumber(nums)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const nums = [0, 1]

  const result = missingNumber(nums)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]

  const result = missingNumber(nums)

  expect(result).toBe(8)
})
