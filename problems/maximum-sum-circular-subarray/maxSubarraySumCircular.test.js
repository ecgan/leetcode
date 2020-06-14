const maxSubarraySumCircular = require('./maxSubarraySumCircular')

test('Example 1', () => {
  const A = [1, -2, 3, -2]

  const result = maxSubarraySumCircular(A)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const A = [5, -3, 5]

  const result = maxSubarraySumCircular(A)

  expect(result).toBe(10)
})

test('Example 3', () => {
  const A = [3, -1, 2, -1]

  const result = maxSubarraySumCircular(A)

  expect(result).toBe(4)
})

test('Example 4', () => {
  const A = [3, -2, 2, -3]

  const result = maxSubarraySumCircular(A)

  expect(result).toBe(3)
})

test('Example 5', () => {
  const A = [-2, -3, -1]

  const result = maxSubarraySumCircular(A)

  expect(result).toBe(-1)
})
