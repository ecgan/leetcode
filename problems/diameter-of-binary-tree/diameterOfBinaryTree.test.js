const { deserialize } = require('leettree')
const diameterOfBinaryTree = require('./diameterOfBinaryTree')

test('Example 1', () => {
  const array = [1, 2, 3, 4, 5]
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(3)
})

test('only one root node, return 0', () => {
  const array = [1]
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(0)
})

test('one root node with one left, return 1', () => {
  const array = [1, 2]
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(1)
})

test('one root node with one left and one right, return 2', () => {
  const array = [1, 2, 3]
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(2)
})

test('Y-shaped tree with short trunk, return 4', () => {
  const array = [
    2,
    3, null,
    4, 5,
    6, null, null, 7
  ]
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(4)
})

test('Y-shaped balanced tree, return 4', () => {
  const array = [
    1,
    2, null,
    3, null,
    4, 5,
    6, null, null, 7
  ]
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(4)
})

test('Y-shaped tree with longer trunk equal branch, return 5', () => {
  const array = [
    0,
    1, null,
    2, null,
    3, null,
    4, 5,
    6, null, null, 7
  ]
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(5)
})

test('empty array, return 0', () => {
  const array = []
  const root = deserialize(array)

  const result = diameterOfBinaryTree(root)

  expect(result).toBe(0)
})
