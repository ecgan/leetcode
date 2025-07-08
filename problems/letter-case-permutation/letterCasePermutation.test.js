const letterCasePermutation = require('./letterCasePermutation')

test('Example 1', () => {
  const S = 'a1b2'

  const result = letterCasePermutation(S)

  expect(result).toStrictEqual(['a1b2', 'a1B2', 'A1b2', 'A1B2'])
})

test('Example 2', () => {
  const S = '3z4'

  const result = letterCasePermutation(S)

  expect(result).toStrictEqual(['3z4', '3Z4'])
})

test('Example 3', () => {
  const S = '12345'

  const result = letterCasePermutation(S)

  expect(result).toStrictEqual(['12345'])
})

test('Example 4', () => {
  const S = '0'

  const result = letterCasePermutation(S)

  expect(result).toStrictEqual(['0'])
})
