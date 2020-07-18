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

test('n is a squared number', () => {
  const n = 4

  const result = numSquares(n)

  expect(result).toBe(1)
})

test('15 (4+9+1+1) returns 4', () => {
  const n = 15

  const result = numSquares(n)

  expect(result).toBe(4)
})
