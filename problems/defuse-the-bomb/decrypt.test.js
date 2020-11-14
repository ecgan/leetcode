const decrypt = require('./decrypt')

test('Example 1', () => {
  const code = [5, 7, 1, 4]
  const k = 3

  const result = decrypt(code, k)

  expect(result).toStrictEqual([12, 10, 16, 13])
})

test('Example 2', () => {
  const code = [1, 2, 3, 4]
  const k = 0

  const result = decrypt(code, k)

  expect(result).toStrictEqual([0, 0, 0, 0])
})

test('Example 3', () => {
  const code = [2, 4, 9, 3]
  const k = -2

  const result = decrypt(code, k)

  expect(result).toStrictEqual([12, 5, 6, 13])
})
