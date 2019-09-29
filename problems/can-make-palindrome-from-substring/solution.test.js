const canMakePaliQueries = require('./solution')

test('Example 1', () => {
  const s = 'abcda'
  const queries = [[3, 3, 0], [1, 2, 0], [0, 3, 1], [0, 3, 2], [0, 4, 1]]

  const result = canMakePaliQueries(s, queries)

  expect(result).toStrictEqual([true, false, false, true, true])
})

test('hunu', () => {
  const s = 'hunu'
  const queries = [[1, 1, 1], [2, 3, 0], [3, 3, 1], [0, 3, 2], [1, 3, 3], [2, 3, 1], [3, 3, 1], [0, 3, 0], [1, 1, 1], [2, 3, 0], [3, 3, 1], [0, 3, 1], [1, 1, 1]]

  const result = canMakePaliQueries(s, queries)

  expect(result).toStrictEqual([true, false, true, true, true, true, true, false, true, false, true, true, true])
})

test('hunu - simple', () => {
  const s = 'hunu'
  const queries = [[0, 3, 1]]

  const result = canMakePaliQueries(s, queries)

  expect(result).toStrictEqual([true])
})

test('abcdefghijklmnopqrstuvwxyz, k is 12, return false', () => {
  const s = 'abcdefghijklmnopqrstuvwxyz'
  const queries = [[0, 25, 12]]

  const result = canMakePaliQueries(s, queries)

  expect(result).toStrictEqual([false])
})

test('abcdefghijklmnopqrstuvwxyz, k is 13, return true', () => {
  const s = 'abcdefghijklmnopqrstuvwxyz'
  const queries = [[0, 25, 13]]

  const result = canMakePaliQueries(s, queries)

  expect(result).toStrictEqual([true])
})
