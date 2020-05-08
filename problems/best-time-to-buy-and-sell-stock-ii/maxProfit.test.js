const maxProfit = require('./maxProfit')

test('Example 1', () => {
  const prices = [7, 1, 5, 3, 6, 4]

  const result = maxProfit(prices)

  expect(result).toBe(7)
})

test('Example 2', () => {
  const prices = [1, 2, 3, 4, 5]

  const result = maxProfit(prices)

  expect(result).toBe(4)
})

test('Example 3', () => {
  const prices = [7, 6, 4, 3, 1]

  const result = maxProfit(prices)

  expect(result).toBe(0)
})
