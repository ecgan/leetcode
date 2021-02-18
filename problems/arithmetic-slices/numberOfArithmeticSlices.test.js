const numberOfArithmeticSlices = require('./numberOfArithmeticSlices')

test('Example 1', () => {
  const A = [1, 2, 3, 4]

  const result = numberOfArithmeticSlices(A)

  expect(result).toBe(3)
})

test('Not arithmetic', () => {
  const A = [1, 1, 2, 5, 7]

  const result = numberOfArithmeticSlices(A)

  expect(result).toBe(0)
})
