const { deserialize } = require('leettree')
const isValidSequence = require('./isValidSequence')

test('Example 1', () => {
  const root = [
    0,
    1, 0,
    0, 1, 0, null,
    null, 1, 0, 0
  ]
  const arr = [0, 1, 0, 1]

  const result = isValidSequence(deserialize(root), arr)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const root = [0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]
  const arr = [0, 0, 1]

  const result = isValidSequence(deserialize(root), arr)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const root = [0, 1, 0, 0, 1, 0, null, null, 1, 0, 0]
  const arr = [0, 1, 1]

  const result = isValidSequence(deserialize(root), arr)

  expect(result).toBe(false)
})

test('one node', () => {
  const root = [1]
  const arr = [1]

  const result = isValidSequence(deserialize(root), arr)

  expect(result).toBe(true)
})

test('long path', () => {
  const root = [1, 0, 1]
  const arr = [1, 1, 1]

  const result = isValidSequence(deserialize(root), arr)

  expect(result).toBe(false)
})
