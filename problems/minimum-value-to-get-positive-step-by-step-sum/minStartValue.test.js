const minStartValue = require('./minStartValue')

test('Example 1', () => {
  const nums = [-3, 2, -3, 4, 2]

  const result = minStartValue(nums)

  expect(result).toBe(5)
})

test('Example 2', () => {
  const nums = [1, 2]

  const result = minStartValue(nums)

  expect(result).toBe(1)
})

test('Example 3', () => {
  const nums = [1, -2, -3]

  const result = minStartValue(nums)

  expect(result).toBe(5)
})
