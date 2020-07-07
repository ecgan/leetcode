const islandPerimeter = require('./islandPerimeter')

test('Example 1', () => {
  const grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ]

  const result = islandPerimeter(grid)

  expect(result).toBe(16)
})
