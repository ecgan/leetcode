const majorityElement = require('./majorityElement')

test('Example 1', () => {
  const nums = [3, 2, 3]

  const result = majorityElement(nums)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const nums = [2, 2, 1, 1, 1, 2, 2]

  const result = majorityElement(nums)

  expect(result).toBe(2)
})
