const matrixBlockSum = require('./solution')

test('Example 1', () => {
  const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const K = 1

  const result = matrixBlockSum(mat, K)

  const expected = [[12, 21, 16], [27, 45, 33], [24, 39, 28]]
  expect(result).toStrictEqual(expected)
})

test('Example 2', () => {
  const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const K = 2

  const result = matrixBlockSum(mat, K)

  const expected = [[45, 45, 45], [45, 45, 45], [45, 45, 45]]
  expect(result).toStrictEqual(expected)
})

test('when K=0, should return matrix with same values', () => {
  const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const K = 0

  const result = matrixBlockSum(mat, K)

  const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  expect(result).toStrictEqual(expected)
})

test('large K', () => {
  const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const K = 100

  const result = matrixBlockSum(mat, K)

  const expected = [[45, 45, 45], [45, 45, 45], [45, 45, 45]]
  expect(result).toStrictEqual(expected)
})
