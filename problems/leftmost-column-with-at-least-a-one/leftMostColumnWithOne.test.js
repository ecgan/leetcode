const leftMostColumnWithOne = require('./leftMostColumnWithOne')
const BinaryMatrix = require('./BinaryMatrix')

test('Example 1', () => {
  const mat = [
    [0, 0],
    [1, 1]
  ]
  const binaryMatrix = new BinaryMatrix(mat)

  const result = leftMostColumnWithOne(binaryMatrix)

  expect(binaryMatrix.calls).toBeLessThanOrEqual(1000)
  expect(result).toBe(0)
})

test('Example 2', () => {
  const mat = [
    [0, 0],
    [0, 1]
  ]
  const binaryMatrix = new BinaryMatrix(mat)

  const result = leftMostColumnWithOne(binaryMatrix)

  expect(binaryMatrix.calls).toBeLessThanOrEqual(1000)
  expect(result).toBe(1)
})

test('Example 3', () => {
  const mat = [
    [0, 0],
    [0, 0]
  ]
  const binaryMatrix = new BinaryMatrix(mat)

  const result = leftMostColumnWithOne(binaryMatrix)

  expect(binaryMatrix.calls).toBeLessThanOrEqual(1000)
  expect(result).toBe(-1)
})

test('Example 4', () => {
  const mat = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 1]
  ]
  const binaryMatrix = new BinaryMatrix(mat)

  const result = leftMostColumnWithOne(binaryMatrix)

  expect(binaryMatrix.calls).toBeLessThanOrEqual(1000)
  expect(result).toBe(1)
})

test('1 is in the left side of mid', () => {
  const mat = [
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
  const binaryMatrix = new BinaryMatrix(mat)

  const result = leftMostColumnWithOne(binaryMatrix)

  expect(binaryMatrix.calls).toBeLessThanOrEqual(1000)
  expect(result).toBe(2)
})

test('1 is in the right side of mid', () => {
  const mat = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
  ]
  const binaryMatrix = new BinaryMatrix(mat)

  const result = leftMostColumnWithOne(binaryMatrix)

  expect(binaryMatrix.calls).toBeLessThanOrEqual(1000)
  expect(result).toBe(8)
})
