const divide = require('./divide')

test('Example 1', () => {
  const dividend = 10
  const divisor = 3

  const result = divide(dividend, divisor)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const dividend = 7
  const divisor = -3

  const result = divide(dividend, divisor)

  expect(result).toBe(-2)
})

test('Example 3', () => {
  const dividend = 0
  const divisor = 1

  const result = divide(dividend, divisor)

  expect(result).toBe(0)
})

test('Example 4', () => {
  const dividend = 1
  const divisor = 1

  const result = divide(dividend, divisor)

  expect(result).toBe(1)
})

test('-2147483648 and -1 should return 2147483647', () => {
  const dividend = -2147483648
  const divisor = -1

  const result = divide(dividend, divisor)

  expect(result).toBe(2147483647)
})

test('-2147483648 and 1 should return -2147483648', () => {
  const dividend = -2147483648
  const divisor = 1

  const result = divide(dividend, divisor)

  expect(result).toBe(-2147483648)
})
