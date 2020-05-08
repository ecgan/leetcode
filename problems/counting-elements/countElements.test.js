const countElements = require('./countElements')

test('Example 1', () => {
  const arr = [1, 2, 3]

  const result = countElements(arr)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const arr = [1, 1, 3, 3, 5, 5, 7, 7]

  const result = countElements(arr)

  expect(result).toBe(0)
})

test('Example 3', () => {
  const arr = [1, 3, 2, 3, 5, 0]

  const result = countElements(arr)

  expect(result).toBe(3)
})

test('Example 4', () => {
  const arr = [1, 1, 2, 2]

  const result = countElements(arr)

  expect(result).toBe(2)
})
