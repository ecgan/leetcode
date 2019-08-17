const leettree = require('leettree')
const btreeGameWinningMove = require('./solution')

test('Example 1', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const root = leettree.deserialize(array)
  const n = 11
  const x = 3

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(true)
})

test('x at root, only 1 node, should return false', () => {
  const array = [1]
  const root = leettree.deserialize(array)
  const n = 1
  const x = 1

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(false)
})

test('x at root, 3 left and 3 right, return false', () => {
  const array = [1, 2, 3, 4, null, 5, null, 6, null, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 1

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(false)
})

test('x at root, 4 left and 2 right, return true', () => {
  const array = [1, 2, 3, 4, null, 5, null, 6, null, null, null, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 1

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(true)
})

test('x at root, 2 left and 4 right, return true', () => {
  const array = [1, 2, 3, 4, null, 5, null, null, null, 6, null, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 1

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(true)
})

test('5 nodes, x in the middle, return false', () => {
  const array = [1, 2, null, 3, null, 4, null, 5]
  const root = leettree.deserialize(array)
  const n = 5
  const x = 3

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(false)
})

test('7 nodes, x in the middle, return false', () => {
  const array = [1, 2, null, 3, null, 4, 5, 6, null, null, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 3

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(false)
})

test('7 nodes, 2-3-1 branch model, left branch with length 3, return false', () => {
  const array = [1, 2, null, 3, null, 4, 5, 6, null, null, null, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 3

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(false)
})

test('7 nodes, 2-1-3 branch model, right branch with length 3, return false', () => {
  const array = [1, 2, null, 3, null, 4, 5, null, null, null, 6, null, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 3

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(false)
})

test('7 nodes, 1-4-1 branch model, left branch with length 4, return true', () => {
  const array = [1, 2, null, 3, 4, 5, null, null, null, 6, null, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 2

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(true)
})

test('7 nodes, 1-1-4 branch model, right branch with length 4, return true', () => {
  const array = [1, 2, null, 3, 4, null, null, null, 5, null, 6, 7]
  const root = leettree.deserialize(array)
  const n = 7
  const x = 2

  const result = btreeGameWinningMove(root, n, x)

  expect(result).toBe(true)
})
