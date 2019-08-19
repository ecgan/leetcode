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

test('str1 having 1 character and str2 having 2 characters, should return false', () => {
  const str1 = 'aaaaa'
  const str2 = 'aaabb'

  const result = canConvert(str1, str2)

  expect(result).toBe(false)
})

test('str1 having 2 segments and str4 having 6 segments, should return false', () => {
  const str1 = 'aaabbb'
  const str2 = 'ababab'

  const result = canConvert(str1, str2)

  expect(result).toBe(false)
})

test('same characters, more segments, should return false', () => {
  const str1 = 'abbaccabc'
  const str2 = 'aaabbbccc'

  const result = canConvert(str1, str2)

  expect(result).toBe(false)
})

test('str1 has more characters and more segments, should return true', () => {
  const str1 = 'abcdef'
  const str2 = 'aaabbb'

  const result = canConvert(str1, str2)

  expect(result).toBe(true)
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
