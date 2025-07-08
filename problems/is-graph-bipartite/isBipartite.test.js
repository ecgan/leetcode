const isBipartite = require('./isBipartite')

test('Example 1', () => {
  const graph = [[1, 3], [0, 2], [1, 3], [0, 2]]

  const result = isBipartite(graph)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const graph = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]

  const result = isBipartite(graph)

  expect(result).toBe(false)
})
