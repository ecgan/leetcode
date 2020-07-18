const { deserialize } = require('leettree')
const countNodes = require('./countNodes')

test('Example 1', () => {
  const root = deserialize([1, 2, 3, 4, 5, 6])

  const result = countNodes(root)

  expect(result).toBe(6)
})
