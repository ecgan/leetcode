const countBits = require('./countBits')

test('Example 1', () => {
  const num = 2

  const result = countBits(num)

  expect(result).toStrictEqual([0, 1, 1])
})

test('Example 2', () => {
  const num = 5

  const result = countBits(num)

  expect(result).toStrictEqual([0, 1, 1, 2, 1, 2])
})
