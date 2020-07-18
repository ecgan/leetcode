const uniquePaths = require('./uniquePaths')

test('Example 1', () => {
  const m = 3
  const n = 2

  const result = uniquePaths(m, n)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const m = 7
  const n = 3

  const result = uniquePaths(m, n)

  expect(result).toBe(28)
})
