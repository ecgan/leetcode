const largestAltitude = require('./largestAltitude')

test('Example 1', () => {
  const gain = [-5, 1, 5, 0, -7]

  const result = largestAltitude(gain)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const gain = [-4, -3, -2, -1, 4, 3, 2]

  const result = largestAltitude(gain)

  expect(result).toBe(0)
})
