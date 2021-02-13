const shortestToshortestPathBinaryMatrixhar = require('./shortestPathBinaryMatrix')

test('Example 1', () => {
  const grid = [
    [0, 1],
    [1, 0]
  ]

  const result = shortestToshortestPathBinaryMatrixhar(grid)

  expect(result).toEqual(2)
})

test('Example 2', () => {
  const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0]
  ]

  const result = shortestToshortestPathBinaryMatrixhar(grid)

  expect(result).toEqual(4)
})

test('No path', () => {
  const grid = [
    [1, 1],
    [1, 1]
  ]

  const result = shortestToshortestPathBinaryMatrixhar(grid)

  expect(result).toEqual(-1)
})
