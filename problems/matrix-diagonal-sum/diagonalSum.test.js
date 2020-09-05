const diagonalSum = require('./diagonalSum')

test('Example 1', () => {
  const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  const result = diagonalSum(mat)

  expect(result).toBe(25)
})

test('Example 2', () => {
  const mat = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ]

  const result = diagonalSum(mat)

  expect(result).toBe(8)
})

test('Example 3', () => {
  const mat = [[5]]

  const result = diagonalSum(mat)

  expect(result).toBe(5)
})
