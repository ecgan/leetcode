const findLHS = require('./findLHS')

test('Example 1', () => {
  const nums = [1, 3, 2, 2, 5, 2, 3, 7]

  const result = findLHS(nums)

  expect(result).toBe(5)
})

test('Example 2', () => {
  const nums = [1, 2, 3, 4]

  const result = findLHS(nums)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const nums = [1, 1, 1, 1]

  const result = findLHS(nums)

  expect(result).toBe(0)
})
