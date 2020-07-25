const allPathsSourceTarget = require('./allPathsSourceTarget')

test('Example 1', () => {
  const graph = [
    [1, 2],
    [3],
    [3],
    []
  ]

  const result = allPathsSourceTarget(graph)

  expect(result).toStrictEqual([
    [0, 1, 3],
    [0, 2, 3]
  ])
})
