const findUnsortedSubarray = require('./findUnsortedSubarray')

test('Example 1', () => {
  const nums = [2, 6, 4, 8, 10, 9, 15]

  const result = findUnsortedSubarray(nums)

  expect(result).toBe(5)
})

test('Example 2', () => {
  const nums = [1, 2, 3, 4]

  const result = findUnsortedSubarray(nums)

  expect(result).toBe(0)
})

test('Example 3', () => {
  const nums = [1]

  const result = findUnsortedSubarray(nums)

  expect(result).toBe(0)
})

test('entire array needs to be sorted', () => {
  const nums = [4, 3, 2, 1]

  const result = findUnsortedSubarray(nums)

  expect(result).toBe(4)
})

test('multiple same values', () => {
  const nums = [1, 3, 2, 3, 3]

  const result = findUnsortedSubarray(nums)

  expect(result).toBe(2)
})
