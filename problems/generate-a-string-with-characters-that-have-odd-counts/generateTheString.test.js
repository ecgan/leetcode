const toHexspeak = require('./generateTheString')

test('Example even', () => {
  const n = 4

  const result = toHexspeak(n)

  expect(result).toBe('abbb')
})

test('Example odd', () => {
  const n = 5

  const result = toHexspeak(n)

  expect(result).toBe('bbbbb')
})
