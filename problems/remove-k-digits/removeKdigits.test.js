const removeKdigits = require('./removeKdigits')

test('Example 1', () => {
  const num = '1432219'
  const k = 3

  const result = removeKdigits(num, k)

  expect(result).toBe('1219')
})

test('Example 2', () => {
  const num = '10200'
  const k = 1

  const result = removeKdigits(num, k)

  expect(result).toBe('200')
})

test('Example 3', () => {
  const num = '10'
  const k = 2

  const result = removeKdigits(num, k)

  expect(result).toBe('0')
})

test('9, 1, return 0', () => {
  const num = '9'
  const k = 1

  const result = removeKdigits(num, k)

  expect(result).toBe('0')
})

test('1234567890, 9, return 0', () => {
  const num = '1234567890'
  const k = 9

  const result = removeKdigits(num, k)

  expect(result).toBe('0')
})

test('1111, 2, return 11', () => {
  const num = '1111'
  const k = 2

  const result = removeKdigits(num, k)

  expect(result).toBe('11')
})

test('1155, 2, return 11', () => {
  const num = '1155'
  const k = 2

  const result = removeKdigits(num, k)

  expect(result).toBe('11')
})
