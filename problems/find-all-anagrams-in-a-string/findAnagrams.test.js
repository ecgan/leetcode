const findAnagrams = require('./findAnagrams')

test('Example 1', () => {
  const s = 'cbaebabacd'
  const p = 'abc'

  const result = findAnagrams(s, p)

  expect(result).toStrictEqual([0, 6])
})

test('Example 2', () => {
  const s = 'abab'
  const p = 'ab'

  const result = findAnagrams(s, p)

  expect(result).toStrictEqual([0, 1, 2])
})
