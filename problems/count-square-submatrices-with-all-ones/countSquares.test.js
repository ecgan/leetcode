const countSquares = require('./countSquares')

test('Example 1', () => {
  const matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
  ]

  const result = countSquares(matrix)

  expect(result).toBe(15)
})

test('Example 2', () => {
  const matrix = [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0]
  ]

  const result = countSquares(matrix)

  expect(result).toBe(7)
})
