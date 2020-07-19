const addBinary = require('./addBinary')

test('Example 1', () => {
  const a = '11'
  const b = '1'

  const result = addBinary(a, b)

  expect(result).toBe('100')
})

test('Example 2', () => {
  const a = '1010'
  const b = '1011'

  const result = addBinary(a, b)

  expect(result).toBe('10101')
})
