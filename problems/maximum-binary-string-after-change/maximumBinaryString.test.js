const maximumBinaryString = require('./maximumBinaryString')

test('Example 1', () => {
  const binary = '000110'

  const result = maximumBinaryString(binary)

  expect(result).toBe('111011')
})

test('Example 2', () => {
  const binary = '01'

  const result = maximumBinaryString(binary)

  expect(result).toBe('01')
})

test('0101 returns 1011', () => {
  const binary = '0101'

  const result = maximumBinaryString(binary)

  expect(result).toBe('1011')
})

test('01010101 returns 1011', () => {
  const binary = '01010101'

  const result = maximumBinaryString(binary)

  expect(result).toBe('11101111')
})

test('01111001100000110010 returns 11111111110111111111', () => {
  const binary = '01111001100000110010'

  const result = maximumBinaryString(binary)

  expect(result).toBe('11111111110111111111')
})
