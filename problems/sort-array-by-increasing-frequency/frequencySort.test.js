const frequencySort = require('./frequencySort')

test('Example 1', () => {
  const nums = [1, 1, 2, 2, 2, 3]

  const result = frequencySort(nums)

  expect(result).toStrictEqual([3, 1, 1, 2, 2, 2])
})

test('Example 2', () => {
  const nums = [2, 3, 1, 3, 2]

  const result = frequencySort(nums)

  expect(result).toStrictEqual([1, 3, 3, 2, 2])
})

test('Example 3', () => {
  const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

  const result = frequencySort(nums)

  expect(result).toStrictEqual([5, -1, 4, 4, -6, -6, 1, 1, 1])
})
