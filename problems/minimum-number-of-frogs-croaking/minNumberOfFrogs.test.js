const minNumberOfFrogs = require('./minNumberOfFrogs')

test('Example 1', () => {
  const croakOfFrogs = 'croakcroak'

  const result = minNumberOfFrogs(croakOfFrogs)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const croakOfFrogs = 'crcoakroak'

  const result = minNumberOfFrogs(croakOfFrogs)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const croakOfFrogs = 'croakcrook'

  const result = minNumberOfFrogs(croakOfFrogs)

  expect(result).toBe(-1)
})

test('Example 4', () => {
  const croakOfFrogs = 'croakcroa'

  const result = minNumberOfFrogs(croakOfFrogs)

  expect(result).toBe(-1)
})
