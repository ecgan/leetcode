const numberOfSubstrings = require('./solution')

test('Example 1', () => {
  const s = 'abcabc'

  const result = numberOfSubstrings(s)

  expect(result).toBe(10)
})

test('Example 2', () => {
  const s = 'aaacb'

  const result = numberOfSubstrings(s)

  expect(result).toBe(3)
})

test('Example 3', () => {
  const s = 'abc'

  const result = numberOfSubstrings(s)

  expect(result).toBe(1)
})

test('aabcc', () => {
  const s = 'aabcc'

  const result = numberOfSubstrings(s)

  expect(result).toBe(4)
})

test('ababbbc', () => {
  const s = 'ababbbc'

  const result = numberOfSubstrings(s)

  expect(result).toBe(3)
})

test('acbbcac', () => {
  const s = 'acbbcac'

  const result = numberOfSubstrings(s)

  expect(result).toBe(11)
})
