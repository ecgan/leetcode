const toHexspeak = require('./solution')

test('Example 1', () => {
  const num = '257'

  const result = toHexspeak(num)

  expect(result).toBe('IOI')
})

test('Example 2', () => {
  const num = '3'

  const result = toHexspeak(num)

  expect(result).toBe('ERROR')
})

test('maximum', () => {
  const num = '1000000000000'

  const result = toHexspeak(num)

  expect(result).toBe('ERROR')
})
