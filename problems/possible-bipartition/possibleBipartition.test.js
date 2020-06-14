const possibleBipartition = require('./possibleBipartition')

test('Example 1', () => {
  const N = 4
  const dislikes = [[1, 2], [1, 3], [2, 4]]

  const result = possibleBipartition(N, dislikes)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const N = 3
  const dislikes = [[1, 2], [1, 3], [2, 3]]

  const result = possibleBipartition(N, dislikes)

  expect(result).toBe(false)
})

test('Example 3', () => {
  const N = 5
  const dislikes = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]

  const result = possibleBipartition(N, dislikes)

  expect(result).toBe(false)
})

test('N=1, no dislikes', () => {
  const N = 1
  const dislikes = []

  const result = possibleBipartition(N, dislikes)

  expect(result).toBe(true)
})
