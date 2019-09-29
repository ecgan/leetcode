const uniqueOccurrences = require('./solution')

test('Example 1', () => {
  const arr = [1, 2, 2, 1, 1, 3]

  const result = uniqueOccurrences(arr)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const arr = [1, 2]

  const result = uniqueOccurrences(arr)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]

  const result = uniqueOccurrences(arr)

  expect(result).toBe(true)
})

test('with -1000 value and -999 value, unique occurrence, return true', () => {
  const arr = [-1000, -999, -999]

  const result = uniqueOccurrences(arr)

  expect(result).toBe(true)
})

test('with -1000 value and -999 value, each has one occurrence, return false', () => {
  const arr = [-1000, -999]

  const result = uniqueOccurrences(arr)

  expect(result).toBe(false)
})
