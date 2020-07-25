const findMin = require('./findMin')

test('Example 1', () => {
  const nums = [1, 3, 5]

  const result = findMin(nums)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const nums = [2, 2, 2, 0, 1]

  const result = findMin(nums)

  expect(result).toBe(0)
})
