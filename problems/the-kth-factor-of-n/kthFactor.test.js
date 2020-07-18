const kthFactor = require('./kthFactor')

test('Example 1', () => {
  const n = 12
  const k = 3

  const result = kthFactor(n, k)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const n = 7
  const k = 2

  const result = kthFactor(n, k)

  expect(result).toBe(7)
})

test('Example 3', () => {
  const n = 4
  const k = 4

  const result = kthFactor(n, k)

  expect(result).toBe(-1)
})

test('Example 4', () => {
  const n = 1
  const k = 1

  const result = kthFactor(n, k)

  expect(result).toBe(1)
})

test('Example 5', () => {
  const n = 1000
  const k = 3

  const result = kthFactor(n, k)

  expect(result).toBe(4)
})
