const twoSum = require('./solution')

test('Sample 1', () => {
  const nums = [2, 7, 11, 15]
  const target = 9

  const result = twoSum(nums, target)

  expect(result).toStrictEqual([0, 1])
})

test('4 + 4 = 8', () => {
  const nums = [100, 4, 100, 4, 200]
  const target = 8

  const result = twoSum(nums, target)

  expect(result).toStrictEqual([1, 3])
})
