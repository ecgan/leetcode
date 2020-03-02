const minCostClimbingStairs = require('./minCostClimbingStairs')

test('Example 1', () => {
  const cost = [10, 15, 20]

  const result = minCostClimbingStairs(cost)

  expect(result).toBe(15)
})

test('Example 2', () => {
  const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

  const result = minCostClimbingStairs(cost)

  expect(result).toBe(6)
})
