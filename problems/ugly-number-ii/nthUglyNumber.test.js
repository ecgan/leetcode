const nthUglyNumber = require('./nthUglyNumber')

test('Example 1', () => {
  const n = 10

  const result = nthUglyNumber(n)

  expect(result).toBe(12)
})
