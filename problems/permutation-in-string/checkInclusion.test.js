const checkInclusion = require('./checkInclusion')

test('Example 1', () => {
  const s1 = 'ab'
  const s2 = 'eidbaooo'

  const result = checkInclusion(s1, s2)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const s1 = 'ab'
  const s2 = 'eidboaoo'

  const result = checkInclusion(s1, s2)

  expect(result).toBe(false)
})

test('short strings', () => {
  const s1 = 'ab'
  const s2 = 'ba'

  const result = checkInclusion(s1, s2)

  expect(result).toBe(true)
})

test('s1 longer than s2', () => {
  const s1 = 'abcde'
  const s2 = 'ba'

  const result = checkInclusion(s1, s2)

  expect(result).toBe(false)
})
