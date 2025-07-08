const shortestToChar = require('./shortestToChar')

test('Example 1', () => {
  const s = 'loveleetcode'
  const c = 'e'

  const result = shortestToChar(s, c)

  expect(result).toStrictEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
})

test('Example 2', () => {
  const s = 'aaab'
  const c = 'b'

  const result = shortestToChar(s, c)

  expect(result).toStrictEqual([3, 2, 1, 0])
})
