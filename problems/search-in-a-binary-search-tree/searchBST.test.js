const { deserialize } = require('leettree')
const serialize = require('./serialize')
const searchBST = require('./searchBST')

test('Example 1', () => {
  const root = deserialize([4, 2, 7, 1, 3])
  const val = 2

  const result = searchBST(root, val)

  expect(serialize(result)).toStrictEqual([2, 1, 3])
})

test('node does not exist', () => {
  const root = deserialize([4, 2, 7, 1, 3])
  const val = 5

  const result = searchBST(root, val)

  expect(serialize(result)).toStrictEqual([])
})
