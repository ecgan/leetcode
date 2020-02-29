const daysBetweenDates = require('./daysBetweenDates')

test('Example 1', () => {
  const date1 = '2019-06-29'
  const date2 = '2019-06-30'

  const result = daysBetweenDates(date1, date2)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const date1 = '2020-01-15'
  const date2 = '2019-12-31'

  const result = daysBetweenDates(date1, date2)

  expect(result).toBe(15)
})
