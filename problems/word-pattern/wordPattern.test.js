const wordPattern = require('./wordPattern')

test('Example 1', () => {
  const pattern = 'abba'
  const s = 'dog cat cat dog'

  const result = wordPattern(pattern, s)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const pattern = 'abba'
  const s = 'dog cat cat fish'

  const result = wordPattern(pattern, s)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const pattern = 'aaaa'
  const s = 'dog cat cat dog'

  const result = wordPattern(pattern, s)

  expect(result).toBe(false)
})

test('Each word in `s` maps to one unique letter in `pattern`: ("abba", "dog dog dog dog") returns false', () => {
  const pattern = 'abba'
  const s = 'dog dog dog dog'

  const result = wordPattern(pattern, s)

  expect(result).toBe(false)
})

test('Each word in `s` maps to one letter in `pattern`: ("aaaa", "aa aa aa") returns false', () => {
  const pattern = 'aaaa'
  const s = 'aa aa aa'

  const result = wordPattern(pattern, s)

  expect(result).toBe(false)
})

test('Each letter in `pattern` maps to one word in `s`: ("aaa", "aa aa aa aa") returns false', () => {
  const pattern = 'aaa'
  const s = 'aa aa aa aa'

  const result = wordPattern(pattern, s)

  expect(result).toBe(false)
})
