const sumFourDivisors = require('./sumFourDivisors')

test('Example 1', () => {
  const nums = [21, 4, 7]

  const result = sumFourDivisors(nums)

  expect(result).toBe(32)
})

test('two numbers with four divisors', () => {
  const nums = [21, 21]

  const result = sumFourDivisors(nums)

  expect(result).toBe(64)
})
