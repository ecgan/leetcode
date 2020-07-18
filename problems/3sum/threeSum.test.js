const threeSum = require('./threeSum')

test('Example 1', () => {
  const nums = [-1, 0, 1, 2, -1, -4]

  const result = threeSum(nums)

  expect(result).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1]
  ])
})
