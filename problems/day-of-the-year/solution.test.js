const dayOfYear = require('./solution')

test('Example 1', () => {
  const date = '2019-01-09'

  const result = dayOfYear(date)

  expect(result).toBe(9)
})

test('Example 2', () => {
  const date = '2019-02-10'

  const result = dayOfYear(date)

  expect(result).toBe(41)
})

test('Example 3', () => {
  const date = '2003-03-01'

  const result = dayOfYear(date)

  expect(result).toBe(60)
})

test('Example 4', () => {
  const date = '2004-03-01'

  const result = dayOfYear(date)

  expect(result).toBe(61)
})

test('1900 is not a leap year', () => {
  const date = '1900-12-31'

  const result = dayOfYear(date)

  expect(result).toBe(365)
})

test('2000 is a leap year', () => {
  const date = '2000-12-31'

  const result = dayOfYear(date)

  expect(result).toBe(366)
})

test('Leap year before March, no extra day', () => {
  const date = '2016-02-29'

  const result = dayOfYear(date)

  expect(result).toBe(60)
})
