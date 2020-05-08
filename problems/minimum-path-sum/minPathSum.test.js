const minPathSum = require('./minPathSum')

test('Example 1', () => {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ]

  const result = minPathSum(grid)

  expect(result).toBe(7)
})

test('1*1 grid', () => {
  const grid = [
    [1]
  ]

  const result = minPathSum(grid)

  expect(result).toBe(1)
})

test('2*2 grid', () => {
  const grid = [
    [0, 0],
    [0, 0]
  ]

  const result = minPathSum(grid)

  expect(result).toBe(0)
})
