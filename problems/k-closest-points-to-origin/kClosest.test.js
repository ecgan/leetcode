const kClosest = require('./kClosest')

test('Example 1', () => {
  const points = [[1, 3], [-2, 2]]
  const K = 1

  const result = kClosest(points, K)

  expect(result).toStrictEqual([[-2, 2]])
})

test('Example 2', () => {
  const points = [[3, 3], [5, -1], [-2, 4]]
  const K = 2

  const result = kClosest(points, K)

  expect(result).toStrictEqual([[3, 3], [-2, 4]])
})
