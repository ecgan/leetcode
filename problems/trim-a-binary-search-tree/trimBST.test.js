const { deserialize, serialize } = require('leettree')
const trimBST = require('./trimBST')

test('Example 1', () => {
  const root = deserialize([1, 0, 2])
  const low = 1
  const high = 2

  const result = trimBST(root, low, high)

  expect(serialize(result)).toStrictEqual([1, null, 2])
})

test('Example 2', () => {
  const root = deserialize([3, 0, 4, null, 2, null, null, 1])
  const low = 1
  const high = 3

  const result = trimBST(root, low, high)

  expect(serialize(result)).toStrictEqual([3, 2, null, 1])
})

test('Example 3', () => {
  const root = deserialize([1])
  const low = 1
  const high = 2

  const result = trimBST(root, low, high)

  expect(serialize(result)).toStrictEqual([1])
})

test('Example 4', () => {
  const root = deserialize([1, null, 2])
  const low = 1
  const high = 3

  const result = trimBST(root, low, high)

  expect(serialize(result)).toStrictEqual([1, null, 2])
})

test('Example 5', () => {
  const root = deserialize([1, null, 2])
  const low = 2
  const high = 4

  const result = trimBST(root, low, high)

  expect(serialize(result)).toStrictEqual([2])
})
