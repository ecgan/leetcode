const getPermutation = require('./getPermutation')

test('Example 1', () => {
  const n = 3
  const k = 3

  const result = getPermutation(n, k)

  expect(result).toBe('213')
})

test('Example 2', () => {
  const n = 4
  const k = 9

  const result = getPermutation(n, k)

  expect(result).toBe('2314')
})
