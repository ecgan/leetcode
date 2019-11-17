const encode = require('./solution')

test('Example 1', () => {
  const num = 23

  const result = encode(num)

  expect(result).toBe('1000')
})

test('Example 2', () => {
  const num = 107

  const result = encode(num)

  expect(result).toBe('101100')
})

test('0 should return empty string', () => {
  const num = 0

  const result = encode(num)

  expect(result).toBe('')
})
