const validateBinaryTreeNodes = require('./validateBinaryTreeNodes')

test('Example 1', () => {
  const n = 4
  const leftChild = [1, -1, 3, -1]
  const rightChild = [2, -1, -1, -1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const n = 4
  const leftChild = [1, -1, 3, -1]
  const rightChild = [2, 3, -1, -1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const n = 2
  const leftChild = [1, 0]
  const rightChild = [-1, -1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(false)
})

test('Example 4', () => {
  const n = 6
  const leftChild = [1, -1, -1, 4, -1, -1]
  const rightChild = [2, -1, -1, 5, -1, -1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(false)
})

test('only one node, no child, should return true', () => {
  const n = 1
  const leftChild = [-1]
  const rightChild = [-1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(true)
})

test('three nodes, first node has no child, should return false', () => {
  const n = 3
  const leftChild = [-1, -1, -1]
  const rightChild = [-1, 2, -1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(false)
})

test('three nodes, first node has two children, should return true', () => {
  const n = 3
  const leftChild = [1, -1, -1]
  const rightChild = [2, -1, -1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(true)
})

test('right child has node from left child (similar to example 2), should return false', () => {
  const n = 4
  const leftChild = [1, 3, -1, -1]
  const rightChild = [2, -1, 3, -1]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(false)
})

test('right child points back to parent (similar to example 3), should return false', () => {
  const n = 2
  const leftChild = [-1, -1]
  const rightChild = [1, 0]

  const result = validateBinaryTreeNodes(n, leftChild, rightChild)

  expect(result).toBe(false)
})
