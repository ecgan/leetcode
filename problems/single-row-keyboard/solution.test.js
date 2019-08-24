const calculateTime = require('./solution')

test('Example 1', () => {
  const keyboard = 'abcdefghijklmnopqrstuvwxyz'
  const word = 'cba'

  const result = calculateTime(keyboard, word)

  expect(result).toBe(4)
})

test('Example 2', () => {
  const keyboard = 'pqrstuvwxyzabcdefghijklmno'
  const word = 'leetcode'

  const result = calculateTime(keyboard, word)

  expect(result).toBe(73)
})
