const minCostToMoveChips = require('./productExceptSelf')

test('Example 1', () => {
  const nums = [1, 2, 3, 4]

  const result = minCostToMoveChips(nums)

  expect(result).toStrictEqual([24, 12, 8, 6])
})
