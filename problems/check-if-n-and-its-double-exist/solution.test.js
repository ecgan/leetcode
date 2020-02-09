const checkIfExist = require('./solution')

test('Example 1', () => {
  const arr = [10, 2, 5, 3]

  const result = checkIfExist(arr)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const arr = [7, 1, 14, 11]

  const result = checkIfExist(arr)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const arr = [3, 1, 7, 11]

  const result = checkIfExist(arr)

  expect(result).toBe(false)
})

test('should handle negative numbers too: -20 is double of -10, should return true', () => {
  const arr = [-10, 12, -20, -8, 15]

  const result = checkIfExist(arr)

  expect(result).toBe(true)
})
