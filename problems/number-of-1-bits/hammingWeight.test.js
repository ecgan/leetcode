const hammingWeight = require('./hammingWeight')

test('Example 1', () => {
  const n = 11

  const result = hammingWeight(n)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const n = 128

  const result = hammingWeight(n)

  expect(result).toBe(1)
})

test('Example 3', () => {
  const n = 4294967293

  const result = hammingWeight(n)

  expect(result).toBe(31)
})
