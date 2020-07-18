const isPowerOfTwo = require('./isPowerOfTwo')

test('Example 1', () => {
  const n = 1

  const result = isPowerOfTwo(n)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const n = 16

  const result = isPowerOfTwo(n)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const n = 218

  const result = isPowerOfTwo(n)

  expect(result).toBe(false)
})
