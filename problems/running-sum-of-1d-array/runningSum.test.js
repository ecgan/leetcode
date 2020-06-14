const runningSum = require('./runningSum')

test('Example 1', () => {
  const nums = [1, 2, 3, 4]

  const result = runningSum(nums)

  expect(result).toStrictEqual([1, 3, 6, 10])
})

test('Example 2', () => {
  const nums = [1, 1, 1, 1, 1]

  const result = runningSum(nums)

  expect(result).toStrictEqual([1, 2, 3, 4, 5])
})

test('Example 3', () => {
  const nums = [3, 1, 2, 10, 1]

  const result = runningSum(nums)

  expect(result).toStrictEqual([3, 4, 6, 16, 17])
})
