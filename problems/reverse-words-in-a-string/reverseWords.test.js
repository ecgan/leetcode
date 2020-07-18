const reverseWords = require('./reverseWords')

test('Example 1', () => {
  const s = 'the sky is blue'

  const result = reverseWords(s)

  expect(result).toBe('blue is sky the')
})

test('Example 2', () => {
  const s = '  hello world!  '

  const result = reverseWords(s)

  expect(result).toBe('world! hello')
})

test('Example 3', () => {
  const s = 'a good   example'

  const result = reverseWords(s)

  expect(result).toBe('example good a')
})
