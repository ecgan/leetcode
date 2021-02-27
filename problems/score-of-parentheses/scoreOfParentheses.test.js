const scoreOfParentheses = require('./scoreOfParentheses')

test('Example 1', () => {
  const S = '()'

  const result = scoreOfParentheses(S)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const S = '(())'

  const result = scoreOfParentheses(S)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const S = '()()'

  const result = scoreOfParentheses(S)

  expect(result).toBe(2)
})

test('Example 4', () => {
  const S = '(()(()))'

  const result = scoreOfParentheses(S)

  expect(result).toBe(6)
})
