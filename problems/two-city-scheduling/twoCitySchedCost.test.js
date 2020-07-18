const twoCitySchedCost = require('./twoCitySchedCost')

test('Example 1', () => {
  const costs = [[10, 20], [30, 200], [400, 50], [30, 20]]

  const result = twoCitySchedCost(costs)

  expect(result).toBe(110)
})
