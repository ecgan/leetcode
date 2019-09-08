const dayOfTheWeek = require('./solution')

test('Example 1', () => {
  const day = 31
  const month = 8
  const year = 2019

  const result = dayOfTheWeek(day, month, year)

  expect(result).toBe('Saturday')
})

test('Example 2', () => {
  const day = 18
  const month = 7
  const year = 1999

  const result = dayOfTheWeek(day, month, year)

  expect(result).toBe('Sunday')
})

test('Example 3', () => {
  const day = 15
  const month = 8
  const year = 1993

  const result = dayOfTheWeek(day, month, year)

  expect(result).toBe('Sunday')
})
