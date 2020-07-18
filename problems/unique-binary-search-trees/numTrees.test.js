const numTrees = require('./numTrees')

test('Example 1', () => {
  const n = 3

  const result = numTrees(n)

  expect(result).toBe(5)
})
