const { deserialize } = require('leettree')
const isCousins = require('./isCousins')

test('Example 1', () => {
  const root = deserialize([1, 2, 3, 4])
  const x = 4
  const y = 3

  const result = isCousins(root, x, y)

  expect(result).toBe(false)
})

test('Example 2', () => {
  const root = deserialize([1, 2, 3, null, 4, null, 5])
  const x = 5
  const y = 4

  const result = isCousins(root, x, y)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const root = deserialize([1, 2, 3, null, 4])
  const x = 2
  const y = 3

  const result = isCousins(root, x, y)

  expect(result).toBe(false)
})

test('one right node and then one left node are cousins', () => {
  const root = deserialize([
    1,
    2, 3,
    null, 5, 6, null
  ])
  const x = 5
  const y = 6

  const result = isCousins(root, x, y)

  expect(result).toBe(true)
})

test('one left node and then one right node are cousins', () => {
  const root = deserialize([
    1,
    2, 3,
    5, null, null, 6
  ])
  const x = 5
  const y = 6

  const result = isCousins(root, x, y)

  expect(result).toBe(true)
})
