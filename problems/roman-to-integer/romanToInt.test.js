const romanToInt = require('./romanToInt')

test('Example 1', () => {
  const s = 'III'

  const result = romanToInt(s)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const s = 'IV'

  const result = romanToInt(s)

  expect(result).toBe(4)
})

test('Example 3', () => {
  const s = 'IX'

  const result = romanToInt(s)

  expect(result).toBe(9)
})

test('Example 4', () => {
  const s = 'LVIII'

  const result = romanToInt(s)

  expect(result).toBe(58)
})

test('Example 5', () => {
  const s = 'MCMXCIV'

  const result = romanToInt(s)

  expect(result).toBe(1994)
})
