const frequencySort = require('./frequencySort')

test('Example 1', () => {
  const s = 'tree'

  const result = frequencySort(s)

  expect(result).toBe('eetr')
})

test('Example 2', () => {
  const s = 'cccaaa'

  const result = frequencySort(s)

  expect(result).toBe('cccaaa')
})

test('Example 3', () => {
  const s = 'Aabb'

  const result = frequencySort(s)

  expect(result).toBe('bbAa')
})
