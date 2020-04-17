const numIslands = require('./numIslands')

test('Example 1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ]

  const result = numIslands(grid)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ]

  const result = numIslands(grid)

  expect(result).toBe(3)
})
