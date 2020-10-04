const { deserialize } = require('leettree')
const isEvenOddTree = require('./isEvenOddTree')

test('Example 1', () => {
  const root = deserialize([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2])

  const result = isEvenOddTree(root)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const root = deserialize([5, 4, 2, 3, 3, 7])

  const result = isEvenOddTree(root)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const root = deserialize([5, 9, 1, 3, 5, 7])

  const result = isEvenOddTree(root)

  expect(result).toBe(false)
})

test('Example 4', () => {
  const root = deserialize([1])

  const result = isEvenOddTree(root)

  expect(result).toBe(true)
})

test('Example 5', () => {
  const root = deserialize([11, 8, 6, 1, 3, 9, 11, 30, 20, 18, 16, 12, 10, 4, 2, 17])

  const result = isEvenOddTree(root)

  expect(result).toBe(true)
})
