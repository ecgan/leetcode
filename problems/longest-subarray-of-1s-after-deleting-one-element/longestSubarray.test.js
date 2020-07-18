const longestSubarray = require('./longestSubarray')

test('Example 1', () => {
  const nums = [1, 1, 0, 1]

  const result = longestSubarray(nums)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]

  const result = longestSubarray(nums)

  expect(result).toBe(5)
})

test('Example 3', () => {
  const nums = [1, 1, 1]

  const result = longestSubarray(nums)

  expect(result).toBe(2)
})

test('Example 4', () => {
  const nums = [1, 1, 0, 0, 1, 1, 1, 0, 1]

  const result = longestSubarray(nums)

  expect(result).toBe(4)
})

test('Example 5', () => {
  const nums = [0, 0, 0]

  const result = longestSubarray(nums)

  expect(result).toBe(0)
})

test('1 group of 1, end with 0', () => {
  const nums = [1, 0]

  const result = longestSubarray(nums)

  expect(result).toBe(1)
})

test('1 group of 1, start with 0', () => {
  const nums = [0, 1]

  const result = longestSubarray(nums)

  expect(result).toBe(1)
})
