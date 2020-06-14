const singleNonDuplicate = require('./singleNonDuplicate')

test('Example 1', () => {
  const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]

  const result = singleNonDuplicate(nums)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const nums = [3, 3, 7, 7, 10, 11, 11]

  const result = singleNonDuplicate(nums)

  expect(result).toBe(10)
})
