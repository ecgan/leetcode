const { deserialize, serialize } = require('leettree')
const convertBST = require('./convertBST')

test('Example 1', () => {
  const root = deserialize([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])

  const result = convertBST(root)

  expect(serialize(result)).toStrictEqual([30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8])
})

test('Example 2', () => {
  const root = deserialize([0, null, 1])

  const result = convertBST(root)

  expect(serialize(result)).toStrictEqual([1, null, 1])
})

test('Example 3', () => {
  const root = deserialize([1, 0, 2])

  const result = convertBST(root)

  expect(serialize(result)).toStrictEqual([3, 3, 2])
})

test('Example 4', () => {
  const root = deserialize([3, 2, 4, 1])

  const result = convertBST(root)

  expect(serialize(result)).toStrictEqual([7, 9, 4, 10])
})
