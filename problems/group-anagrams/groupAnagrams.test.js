const groupAnagrams = require('./groupAnagrams')

test('Example 1', () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

  const result = groupAnagrams(strs)

  expect(result).toStrictEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat']
  ])
})
