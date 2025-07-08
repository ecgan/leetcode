const minRemoveToMakeValid = require('./minRemoveToMakeValid')

test('Example 1', () => {
  const s = 'lee(t(c)o)de)'

  const result = minRemoveToMakeValid(s)

  expect(result).toBe('lee(t(c)o)de')
})

test('Example 2', () => {
  const s = 'a)b(c)d'

  const result = minRemoveToMakeValid(s)

  expect(result).toBe('ab(c)d')
})

test('Example 3', () => {
  const s = '))(('

  const result = minRemoveToMakeValid(s)

  expect(result).toBe('')
})

test('Example 4', () => {
  const s = '(a(b(c)d)'

  const result = minRemoveToMakeValid(s)

  expect(result).toBe('a(b(c)d)')
})

test('Two pairs of parentheses', () => {
  const s = '(a)bc(d)'

  const result = minRemoveToMakeValid(s)

  expect(result).toBe('(a)bc(d)')
})
