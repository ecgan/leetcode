const findCommonResponse = require('./findCommonResponse')

test('Example 1', () => {
  const responses = [['good', 'ok', 'good', 'ok'], ['ok', 'bad', 'good', 'ok', 'ok'], ['good'], ['bad']]

  const result = findCommonResponse(responses)

  expect(result).toBe('good')
})

test('Example 2', () => {
  const responses = [['good', 'ok', 'good'], ['ok', 'bad'], ['bad', 'notsure'], ['great', 'good']]

  const result = findCommonResponse(responses)

  expect(result).toBe('bad')
})
