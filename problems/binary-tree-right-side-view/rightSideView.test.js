const { deserialize } = require('leettree')
const rightSideView = require('./rightSideView')

test('Example 1', () => {
  const root = deserialize([1, 2, 3, null, 5, null, 4])

  const result = rightSideView(root)

  expect(result).toStrictEqual([1, 3, 4])
})

test('No node', () => {
  const root = deserialize([])

  const result = rightSideView(root)

  expect(result).toStrictEqual([])
})
