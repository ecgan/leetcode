const minDistance = require('./minDistance')

test('Example 1', () => {
  const word1 = 'horse'
  const word2 = 'ros'

  const result = minDistance(word1, word2)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const word1 = 'intention'
  const word2 = 'execution'

  const result = minDistance(word1, word2)

  expect(result).toBe(5)
})

test('word 1 empty string', () => {
  const word1 = ''
  const word2 = 'ros'

  const result = minDistance(word1, word2)

  expect(result).toBe(3)
})

test('word 2 empty string', () => {
  const word1 = 'horse'
  const word2 = ''

  const result = minDistance(word1, word2)

  expect(result).toBe(5)
})
