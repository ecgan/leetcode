const minCost = require('./minCost')

test('Example 1', () => {
  const s = 'abaac'
  const cost = [1, 2, 3, 4, 5]

  const result = minCost(s, cost)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const s = 'abc'
  const cost = [1, 2, 3]

  const result = minCost(s, cost)

  expect(result).toBe(0)
})

test('Example 3', () => {
  const s = 'aabaa'
  const cost = [1, 2, 3, 4, 1]

  const result = minCost(s, cost)

  expect(result).toBe(2)
})

test('caaac', () => {
  const s = 'caaac'
  const cost = [0, 2, 4, 3, 0]

  const result = minCost(s, cost)

  expect(result).toBe(5)
})
