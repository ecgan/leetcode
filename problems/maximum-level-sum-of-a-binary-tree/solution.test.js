const leettree = require('leettree')
const maxLevelSum = require('./solution')

test('Example 1', () => {
  const array = [1, 7, 0, 7, -8, null, null]
  const root = leettree.deserialize(array)

  const result = maxLevelSum(root)

  expect(result).toBe(2)
})
