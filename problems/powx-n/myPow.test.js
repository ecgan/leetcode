const myPow = require('./myPow')

test('Example 1', () => {
  const x = 2.00000
  const n = 10

  const result = myPow(x, n)

  expect(result).toBe(1024.00000)
})

test('Example 2', () => {
  const x = 2.10000
  const n = 3

  const result = myPow(x, n)

  expect(result).toBe(9.26100)
})

test('Example 3', () => {
  const x = 2.00000
  const n = -2

  const result = myPow(x, n)

  expect(result).toBe(0.25000)
})
