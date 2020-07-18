const { deserialize } = require('leettree')
const isSameTree = require('./isSameTree')

test('Example 1', () => {
  const p = deserialize([1, 2, 3])
  const q = deserialize([1, 2, 3])

  const result = isSameTree(p, q)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const p = deserialize([1, 2])
  const q = deserialize([1, null, 2])

  const result = isSameTree(p, q)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const p = deserialize([1, 2, 1])
  const q = deserialize([1, 1, 2])

  const result = isSameTree(p, q)

  expect(result).toBe(false)
})
