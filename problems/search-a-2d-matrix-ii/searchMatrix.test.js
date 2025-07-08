const searchMatrix = require('./searchMatrix')

test('Example 1', () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  const target = 5

  const result = searchMatrix(matrix, target)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  const target = 20

  const result = searchMatrix(matrix, target)

  expect(result).toBe(false)
})
