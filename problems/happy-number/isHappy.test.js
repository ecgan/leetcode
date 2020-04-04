const isHappy = require('./isHappy')

test('Example 1', () => {
  const n = 19

  const result = isHappy(n)

  expect(result).toBe(true)
})

test('Not happy number 40 should return false', () => {
  const n = 40

  const result = isHappy(n)

  expect(result).toBe(false)
})
