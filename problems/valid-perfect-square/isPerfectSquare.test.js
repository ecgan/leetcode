const isPerfectSquare = require('./isPerfectSquare')

test('Example 1', () => {
  const num = 16

  const result = isPerfectSquare(num)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const num = 14

  const result = isPerfectSquare(num)

  expect(result).toBe(false)
})
