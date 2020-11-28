const maxRepeating = require('./maxRepeating')

test('Example 1', () => {
  const sequence = 'ababc'
  const word = 'ab'

  const result = maxRepeating(sequence, word)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const sequence = 'ababc'
  const word = 'ba'

  const result = maxRepeating(sequence, word)

  expect(result).toBe(1)
})

test('Example 3', () => {
  const sequence = 'ababc'
  const word = 'ac'

  const result = maxRepeating(sequence, word)

  expect(result).toBe(0)
})

test('max k is 3 in front', () => {
  const sequence = 'abababccccabab'
  const word = 'ab'

  const result = maxRepeating(sequence, word)

  expect(result).toBe(3)
})
