const checkIfExist = require('./solution')

test('Example 1', () => {
  const s = 'bab'
  const t = 'aba'

  const result = checkIfExist(s, t)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const s = 'leetcode'
  const t = 'practice'

  const result = checkIfExist(s, t)

  expect(result).toBe(5)
})

test('Example 3', () => {
  const s = 'anagram'
  const t = 'mangaar'

  const result = checkIfExist(s, t)

  expect(result).toBe(0)
})

test('Example 4', () => {
  const s = 'xxyyzz'
  const t = 'xxyyzz'

  const result = checkIfExist(s, t)

  expect(result).toBe(0)
})

test('Example 5', () => {
  const s = 'friend'
  const t = 'family'

  const result = checkIfExist(s, t)

  expect(result).toBe(4)
})
