const NumArray = require('./NumArray')

test('Example 1', () => {
  const nums = [-2, 0, 3, -5, 2, -1]
  const numArray = new NumArray(nums)

  const result1 = numArray.sumRange(0, 2)
  expect(result1).toBe(1)

  const result2 = numArray.sumRange(2, 5)
  expect(result2).toBe(-1)

  const result3 = numArray.sumRange(0, 5)
  expect(result3).toBe(-3)
})
