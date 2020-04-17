const climbStairs = require('./climbStairs')

test('Example 1', () => {
  const n = 2

  const result = climbStairs(n)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const n = 3

  const result = climbStairs(n)

  expect(result).toBe(3)
})

test('n=1 should return 1', () => {
  const n = 1

  const result = climbStairs(n)

  expect(result).toBe(1)
})

test('n=4 should return 5', () => {
  const n = 4

  const result = climbStairs(n)

  expect(result).toBe(5)
})

test('n=5 should return 8', () => {
  const n = 5

  const result = climbStairs(n)

  expect(result).toBe(8)
})
