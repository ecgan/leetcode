const { deserialize } = require('leettree')
const widthOfBinaryTree = require('./widthOfBinaryTree')

test('Example 1', () => {
  const root = deserialize([1, 3, 2, 5, 3, null, 9])

  const result = widthOfBinaryTree(root)

  expect(result).toBe(4)
})

test('Example 2', () => {
  const root = deserialize([1, 3, null, 5, 3])

  const result = widthOfBinaryTree(root)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const root = deserialize([1, 3, 2, 5])

  const result = widthOfBinaryTree(root)

  expect(result).toBe(2)
})

test('Example 4', () => {
  const root = deserialize([1, 3, 2, 5, null, null, 9, 6, null, null, 7])

  const result = widthOfBinaryTree(root)

  expect(result).toBe(8)
})
