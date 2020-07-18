const calculateMinimumHP = require('./calculateMinimumHP')

test('Example 1', () => {
  const dungeon = [
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
  ]

  const result = calculateMinimumHP(dungeon)

  expect(result).toBe(7)
})
