const findLongestWord = require('./findLongestWord')

test('Example 1', () => {
  const s = 'abpcplea'; const d = ['ale', 'apple', 'monkey', 'plea']

  const result = findLongestWord(s, d)

  expect(result).toBe('apple')
})

test('Example 2', () => {
  const s = 'abpcplea'; const d = ['a', 'b', 'c']

  const result = findLongestWord(s, d)

  expect(result).toBe('a')
})
