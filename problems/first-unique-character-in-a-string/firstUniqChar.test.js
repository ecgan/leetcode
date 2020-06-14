const firstUniqChar = require('./firstUniqChar')

test('Example 1', () => {
  const s = 'leetcode'

  const result = firstUniqChar(s)

  expect(result).toBe(0)
})

test('Example 2', () => {
  const s = 'loveleetcode'

  const result = firstUniqChar(s)

  expect(result).toBe(2)
})

test('empty string, return -1', () => {
  const s = ''

  const result = firstUniqChar(s)

  expect(result).toBe(-1)
})

test('no unique, return -1', () => {
  const s = 'aa'

  const result = firstUniqChar(s)

  expect(result).toBe(-1)
})
