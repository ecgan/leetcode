const plusOne = require('./plusOne')

test('Example 1', () => {
  const digits = [1, 2, 3]

  const result = plusOne(digits)

  expect(result).toStrictEqual([1, 2, 4])
})

test('Example 2', () => {
  const digits = [4, 3, 2, 1]

  const result = plusOne(digits)

  expect(result).toStrictEqual([4, 3, 2, 2])
})

test('999 should become 1000', () => {
  const digits = [9, 9, 9]

  const result = plusOne(digits)

  expect(result).toStrictEqual([1, 0, 0, 0])
})
