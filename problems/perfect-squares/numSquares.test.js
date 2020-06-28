const numSquares = require('./numSquares')

test('Example 1', () => {
  const n = 12

  const result = numSquares(n)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const n = 13

  const result = numSquares(n)

  expect(result).toBe(2)
})
