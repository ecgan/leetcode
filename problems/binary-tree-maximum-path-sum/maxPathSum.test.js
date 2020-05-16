const { deserialize } = require('leettree')
const maxPathSum = require('./maxPathSum')

test('Example 1', () => {
  const input = [1, 2, 3]
  const root = deserialize(input)

  const result = maxPathSum(root)

  expect(result).toBe(6)
})

test('Example 2', () => {
  const input = [-10, 9, 20, null, null, 15, 7]
  const root = deserialize(input)

  const result = maxPathSum(root)

  expect(result).toBe(42)
})

test('only one node with negative value', () => {
  const input = [-3]
  const root = deserialize(input)

  const result = maxPathSum(root)

  expect(result).toBe(-3)
})

test('tree with 2 node, result is the one root node only', () => {
  const input = [2, -1]
  const root = deserialize(input)

  const result = maxPathSum(root)

  expect(result).toBe(2)
})
