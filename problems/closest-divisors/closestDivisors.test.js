const closestDivisors = require('./closestDivisors')

test('Example 1', () => {
  const num = 8

  const result = closestDivisors(num)

  expect(result).toStrictEqual([3, 3])
})

test('Example 2', () => {
  const num = 123

  const result = closestDivisors(num)

  expect(result).toStrictEqual([5, 25])
})

test('Example 3', () => {
  const num = 999

  const result = closestDivisors(num)

  expect(result).toStrictEqual([25, 40])
})
