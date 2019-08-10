const canConvert = require('./solution')

test('Example 1', () => {
  const str1 = 'aabcc'
  const str2 = 'ccdee'

  const result = canConvert(str1, str2)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const str1 = 'leetcode'
  const str2 = 'codeleet'

  const result = canConvert(str1, str2)

  expect(result).toBe(false)
})

test('"ab" and "ba" should return true', () => {
  const str1 = 'ab'
  const str2 = 'ba'

  const result = canConvert(str1, str2)

  expect(result).toBe(true)
})

test('"abcdefghijklmnopqrstuvwxyz" and "abcdefghijklmnopqrstuvwxyz" should return true', () => {
  const str1 = 'abcdefghijklmnopqrstuvwxyz'
  const str2 = 'abcdefghijklmnopqrstuvwxyz'

  const result = canConvert(str1, str2)

  expect(result).toBe(true)
})

test('"abcdefghijklmnopqrstuvwxyz" and "bcdefghijklmnopqrstuvwxyza" should return false', () => {
  const str1 = 'abcdefghijklmnopqrstuvwxyz'
  const str2 = 'bcdefghijklmnopqrstuvwxyza'

  const result = canConvert(str1, str2)

  expect(result).toBe(false)
})

test('"abcdefghijklmnopqrstuvwxyz" and "bcdefghijklmnopqrstuvwxyzq" should return true', () => {
  const str1 = 'abcdefghijklmnopqrstuvwxyz'
  const str2 = 'bcdefghijklmnopqrstuvwxyzq'

  const result = canConvert(str1, str2)

  expect(result).toBe(true)
})
