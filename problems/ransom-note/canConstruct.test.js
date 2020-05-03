const canConstruct = require('./canConstruct')

test('Example 1', () => {
  const ransomNote = 'a'
  const magazine = 'b'

  const result = canConstruct(ransomNote, magazine)

  expect(result).toBe(false)
})

test('Example 2', () => {
  const ransomNote = 'aa'
  const magazine = 'ab'

  const result = canConstruct(ransomNote, magazine)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const ransomNote = 'aa'
  const magazine = 'aab'

  const result = canConstruct(ransomNote, magazine)

  expect(result).toBe(true)
})
