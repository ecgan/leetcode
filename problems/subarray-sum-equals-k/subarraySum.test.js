const subarraySum = require('./subarraySum')

test('Example 1', () => {
  const nums = [1, 1, 1]
  const k = 2

  const result = subarraySum(nums, k)

  expect(result).toBe(2)
})

test('complex array with -2 and 2', () => {
  const nums = [3, 4, 7, -2, 2, 1, 4, 2]
  const k = 7

  const result = subarraySum(nums, k)

  expect(result).toBe(6)
})

test('no subarray', () => {
  const nums = [1]
  const k = 0

  const result = subarraySum(nums, k)

  expect(result).toBe(0)
})
