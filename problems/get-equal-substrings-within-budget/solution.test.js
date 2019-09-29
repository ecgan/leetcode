const equalSubstring = require('./solution')

test('Example 1', () => {
  const s = 'abcd'
  const t = 'bcdf'
  const maxCost = 3

  const result = equalSubstring(s, t, maxCost)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const s = 'abcd'
  const t = 'cdef'
  const maxCost = 3

  const result = equalSubstring(s, t, maxCost)

  expect(result).toBe(1)
})

test('Example 3', () => {
  const s = 'abcd'
  const t = 'acde'
  const maxCost = 0

  const result = equalSubstring(s, t, maxCost)

  expect(result).toBe(1)
})
