const arrangeCoins = require('./arrangeCoins')

test('Example 1', () => {
  const n = 5

  const result = arrangeCoins(n)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const n = 8

  const result = arrangeCoins(n)

  expect(result).toBe(3)
})
