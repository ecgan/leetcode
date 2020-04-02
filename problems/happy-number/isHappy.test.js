const isHappy = require('./isHappy')

test('Example 1', () => {
  const n = 19

  const result = isHappy(n)

  expect(result).toBe(true)
})
