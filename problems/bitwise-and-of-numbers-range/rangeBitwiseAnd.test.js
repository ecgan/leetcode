const rangeBitwiseAnd = require('./rangeBitwiseAnd')

test('Example 1', () => {
  const m = 5
  const n = 7

  const result = rangeBitwiseAnd(m, n)

  expect(result).toBe(4)
})

test('Example 2', () => {
  const m = 0
  const n = 1

  const result = rangeBitwiseAnd(m, n)

  expect(result).toBe(0)
})

test('edge to edge', () => {
  const m = 0
  const n = 2147483647

  const result = rangeBitwiseAnd(m, n)

  expect(result).toBe(0)
})

test('edge to edge', () => {
  const m = 2
  const n = 2147483647

  const result = rangeBitwiseAnd(m, n)

  expect(result).toBe(0)
})
