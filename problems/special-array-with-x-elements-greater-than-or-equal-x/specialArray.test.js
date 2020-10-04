const specialArray = require('./specialArray')

test('Example 1', () => {
  const nums = [3, 5]

  const result = specialArray(nums)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const nums = [0, 0]

  const result = specialArray(nums)

  expect(result).toBe(-1)
})

test('Example 3', () => {
  const nums = [0, 4, 3, 0, 4]

  const result = specialArray(nums)

  expect(result).toBe(3)
})

test('Example 4', () => {
  const nums = [3, 6, 7, 7, 0]

  const result = specialArray(nums)

  expect(result).toBe(-1)
})
