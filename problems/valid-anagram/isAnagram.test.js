const isAnagram = require('./isAnagram')

test('Example 1', () => {
  const s = 'anagram'
  const t = 'nagaram'

  const result = isAnagram(s, t)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const s = 'rat'
  const t = 'car'

  const result = isAnagram(s, t)

  expect(result).toBe(false)
})

test('s has more characters than t, should return false', () => {
  const s = 'ab'
  const t = 'a'

  const result = isAnagram(s, t)

  expect(result).toBe(false)
})
