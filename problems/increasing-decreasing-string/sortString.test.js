const sortString = require('./sortString')

test('Example 1', () => {
  const s = 'aaaabbbbcccc'

  const result = sortString(s)

  expect(result).toBe('abccbaabccba')
})

test('Example 2', () => {
  const s = 'rat'

  const result = sortString(s)

  expect(result).toBe('art')
})

test('Example 3', () => {
  const s = 'leetcode'

  const result = sortString(s)

  expect(result).toBe('cdelotee')
})

test('Example 4', () => {
  const s = 'ggggggg'

  const result = sortString(s)

  expect(result).toBe('ggggggg')
})

test('Example 5', () => {
  const s = 'spo'

  const result = sortString(s)

  expect(result).toBe('ops')
})
