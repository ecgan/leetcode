const finalPrices = require('./finalPrices')

test('Example 1', () => {
  const prices = [8, 4, 6, 2, 3]

  const result = finalPrices(prices)

  expect(result).toStrictEqual([4, 2, 4, 2, 3])
})

test('Example 2', () => {
  const prices = [1, 2, 3, 4, 5]

  const result = finalPrices(prices)

  expect(result).toStrictEqual([1, 2, 3, 4, 5])
})

test('Example 3', () => {
  const prices = [10, 1, 1, 6]

  const result = finalPrices(prices)

  expect(result).toStrictEqual([9, 0, 1, 6])
})
