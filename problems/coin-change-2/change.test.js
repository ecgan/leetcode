const change = require('./change')

test('Example 1', () => {
  const amount = 5
  const coins = [1, 2, 5]

  const result = change(amount, coins)

  expect(result).toBe(4)
})

test('Example 2', () => {
  const amount = 3
  const coins = [2]

  const result = change(amount, coins)

  expect(result).toBe(0)
})

test('Example 3', () => {
  const amount = 10
  const coins = [10]

  const result = change(amount, coins)

  expect(result).toBe(1)
})

test('amount 0 should return 1 (empty combination)', () => {
  const amount = 0
  const coins = [1, 2, 5]

  const result = change(amount, coins)

  expect(result).toBe(1)
})
