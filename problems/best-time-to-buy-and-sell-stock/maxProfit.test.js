const maxProfit = require('./maxProfit')

test('Example 1', () => {
  const prices = [7, 1, 5, 3, 6, 4]

  const result = maxProfit(prices)

  expect(result).toBe(5)
})

test('Example 2', () => {
  const prices = [7, 6, 4, 3, 1]

  const result = maxProfit(prices)

  expect(result).toBe(0)
})
