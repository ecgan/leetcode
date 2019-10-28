const minCostToMoveChips = require('./solution')

test('Example 1', () => {
  const input = [1, 2, 3]

  const result = minCostToMoveChips(input)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const input = [2, 2, 2, 3, 3]

  const result = minCostToMoveChips(input)

  expect(result).toBe(2)
})

test('all chips at even position, return 0', () => {
  const input = [0, 0, 0, 50, 50, 50, 100, 100, 100, 100]

  const result = minCostToMoveChips(input)

  expect(result).toBe(0)
})

test('move 4 chips at position 2, return 4', () => {
  const input = [1, 1, 1, 1, 1, 2, 2, 2, 2]

  const result = minCostToMoveChips(input)

  expect(result).toBe(4)
})
