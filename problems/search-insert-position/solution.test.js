const searchInsert = require('./solution')

test('Example 1', () => {
  const nums = [1, 3, 5, 6]
  const target = 5

  const result = searchInsert(nums, target)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const nums = [1, 3, 5, 6]
  const target = 2

  const result = searchInsert(nums, target)

  expect(result).toBe(1)
})

test('Example 3', () => {
  const nums = [1, 3, 5, 6]
  const target = 7

  const result = searchInsert(nums, target)

  expect(result).toBe(4)
})

test('Example 1', () => {
  const nums = [1, 3, 5, 6]
  const target = 0

  const result = searchInsert(nums, target)

  expect(result).toBe(0)
})
