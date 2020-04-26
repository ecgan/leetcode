const longestCommonSubsequence = require('./longestCommonSubsequence')

test('Example 1', () => {
  const text1 = 'abcde'
  const text2 = 'ace'

  const result = longestCommonSubsequence(text1, text2)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const text1 = 'abc'
  const text2 = 'abc'

  const result = longestCommonSubsequence(text1, text2)

  expect(result).toBe(3)
})

test('Example 3', () => {
  const text1 = 'abc'
  const text2 = 'def'

  const result = longestCommonSubsequence(text1, text2)

  expect(result).toBe(0)
})
