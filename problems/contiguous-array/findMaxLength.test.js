const findMaxLength = require('./findMaxLength')

test('Example 1', () => {
  const arr = [0, 1]

  const result = findMaxLength(arr)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const arr = [0, 1, 0]

  const result = findMaxLength(arr)

  expect(result).toBe(2)
})

test('empty array', () => {
  const arr = []

  const result = findMaxLength(arr)

  expect(result).toBe(0)
})

test('only one element', () => {
  const arr = [0]

  const result = findMaxLength(arr)

  expect(result).toBe(0)
})

test('two same elements', () => {
  const arr = [0, 0]

  const result = findMaxLength(arr)

  expect(result).toBe(0)
})

test('two pairs of 0 and 1', () => {
  const arr = [0, 1, 0, 1]

  const result = findMaxLength(arr)

  expect(result).toBe(4)
})

test('two 0 and two 1 in long array, return 4', () => {
  const arr = [1, 1, 1, 0, 0, 1, 1, 1]

  const result = findMaxLength(arr)

  expect(result).toBe(4)
})

test('0110 should return 4', () => {
  const arr = [0, 1, 1, 0]

  const result = findMaxLength(arr)

  expect(result).toBe(4)
})

test('01101 should return 4', () => {
  const arr = [0, 1, 1, 0, 1]

  const result = findMaxLength(arr)

  expect(result).toBe(4)
})

test('011101 should return 2', () => {
  const arr = [0, 1, 1, 1, 0, 1]

  const result = findMaxLength(arr)

  expect(result).toBe(2)
})

test('11110010111 should return 6', () => {
  const arr = [1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1]

  const result = findMaxLength(arr)

  expect(result).toBe(6)
})
