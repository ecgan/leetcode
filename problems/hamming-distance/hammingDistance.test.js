const hammingDistance = require('./hammingDistance')

test('Example 1', () => {
  const x = 1
  const y = 4

  const result = hammingDistance(x, y)

  expect(result).toBe(2)
})
