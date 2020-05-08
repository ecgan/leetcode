const maximalSquare = require('./maximalSquare')

test('Example 1', () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ]

  const result = maximalSquare(matrix)

  expect(result).toBe(4)
})

test('empty matrix', () => {
  const matrix = []

  const result = maximalSquare(matrix)

  expect(result).toBe(0)
})

test('matrix 1*1 with 1, return 1', () => {
  const matrix = [
    ['1']
  ]

  const result = maximalSquare(matrix)

  expect(result).toBe(1)
})

test('matrix 1*1 with 0, return 1', () => {
  const matrix = [
    ['0']
  ]

  const result = maximalSquare(matrix)

  expect(result).toBe(0)
})

test('matrix 2*2 with 1, return 4', () => {
  const matrix = [
    ['1', '1'],
    ['1', '1']
  ]

  const result = maximalSquare(matrix)

  expect(result).toBe(4)
})
