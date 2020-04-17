const isSubsequence = require('./isSubsequence')

test('Example 1', () => {
  const s = 'abc'
  const t = 'ahbgdc'

  const result = isSubsequence(s, t)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const s = 'axc'
  const t = 'ahbgdc'

  const result = isSubsequence(s, t)

  expect(result).toBe(false)
})

test('s=agc, returns true', () => {
  const s = 'agc'
  const t = 'ahbagdca'

  const result = isSubsequence(s, t)

  expect(result).toBe(true)
})

test('s=gac, c cannot be found after g and a, returns false', () => {
  const s = 'gac'
  const t = 'ahbagdca'

  const result = isSubsequence(s, t)

  expect(result).toBe(false)
})
