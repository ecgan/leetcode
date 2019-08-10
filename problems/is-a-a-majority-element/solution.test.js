const isMajorityElement = require('./solution')

test('Example 1', () => {
  const nums = [2, 4, 5, 5, 5, 5, 5, 6, 6]
  const target = 5

  const result = isMajorityElement(nums, target)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const nums = [10, 100, 101, 101]
  const target = 101

  const result = isMajorityElement(nums, target)

  expect(result).toBe(false)
})
