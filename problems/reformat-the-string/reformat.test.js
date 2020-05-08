const reformat = require('./reformat')

test('Example 1', () => {
  const s = 'a0b1c2'

  const result = reformat(s)

  expect(result).toBe('0a1b2c')
})

test('Example 2', () => {
  const s = 'leetcode'

  const result = reformat(s)

  expect(result).toBe('')
})

test('Example 3', () => {
  const s = '1229857369'

  const result = reformat(s)

  expect(result).toBe('')
})

test('Example 4', () => {
  const s = 'covid2019'

  const result = reformat(s)

  expect(result).toBe('c2o0v1i9d')
})

test('Example 5', () => {
  const s = 'ab123'

  const result = reformat(s)

  expect(result).toBe('1a2b3')
})
