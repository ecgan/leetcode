const singleNumber = require('./singleNumber')

test('Example 1', () => {
  const input = [1, 2, 1, 3, 2, 5]

  const result = singleNumber(input)

  expect(result).toStrictEqual([3, 5])
})
