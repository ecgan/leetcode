const topKFrequent = require('./topKFrequent')

test('Example 1', () => {
  const nums = [1, 1, 1, 2, 2, 3]
  const k = 2

  const result = topKFrequent(nums, k)

  expect(result).toStrictEqual([1, 2])
})

test('Example 2', () => {
  const nums = [1]
  const k = 1

  const result = topKFrequent(nums, k)

  expect(result).toStrictEqual([1])
})
