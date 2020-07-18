const { deserialize, serialize } = require('leettree')
const invertTree = require('./invertTree')

test('Example 1', () => {
  const root = deserialize([4, 2, 7, 1, 3, 6, 9])

  const result = invertTree(root)

  expect(serialize(result)).toStrictEqual([4, 7, 2, 9, 6, 3, 1])
})
