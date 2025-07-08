const rangeBitwiseAnd = require('./brokenCalc')

test('Example 1', () => {
  const X = 2
  const Y = 3

  const result = rangeBitwiseAnd(X, Y)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const X = 5
  const Y = 8

  const result = rangeBitwiseAnd(X, Y)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const X = 3
  const Y = 10

  const result = rangeBitwiseAnd(X, Y)

  expect(result).toBe(3)
})

test('Example 4', () => {
  const X = 1024
  const Y = 1

  const result = rangeBitwiseAnd(X, Y)

  expect(result).toBe(1023)
})
