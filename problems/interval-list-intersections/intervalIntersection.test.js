const intervalIntersection = require('./intervalIntersection')

test('Example 1', () => {
  const A = [[0, 2], [5, 10], [13, 23], [24, 25]]
  const B = [[1, 5], [8, 12], [15, 24], [25, 26]]

  const result = intervalIntersection(A, B)

  expect(result).toStrictEqual([
    [1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]
  ])
})
