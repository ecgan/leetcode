const maxUncrossedLines = require('./maxUncrossedLines')

test('Example 1', () => {
  const A = [1, 4, 2]
  const B = [1, 2, 4]

  const result = maxUncrossedLines(A, B)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const A = [2, 5, 1, 2, 5]
  const B = [10, 5, 2, 1, 5, 2]

  const result = maxUncrossedLines(A, B)

  expect(result).toBe(3)
})

test('Example 3', () => {
  const A = [1, 3, 7, 1, 7, 5]
  const B = [1, 9, 2, 5, 1]

  const result = maxUncrossedLines(A, B)

  expect(result).toBe(2)
})
