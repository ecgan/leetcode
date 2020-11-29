const maximumWealth = require('./maximumWealth')

test('Example 1', () => {
  const accounts = [[1, 2, 3], [3, 2, 1]]

  const result = maximumWealth(accounts)

  expect(result).toBe(6)
})

test('Example 2', () => {
  const accounts = [[1, 5], [7, 3], [3, 5]]

  const result = maximumWealth(accounts)

  expect(result).toBe(10)
})

test('Example 3', () => {
  const accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]

  const result = maximumWealth(accounts)

  expect(result).toBe(17)
})
