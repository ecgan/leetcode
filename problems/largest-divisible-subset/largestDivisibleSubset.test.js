const largestDivisibleSubset = require('./largestDivisibleSubset')

test('Example 1', () => {
  const nums = [1, 2, 3]

  const result = largestDivisibleSubset(nums)

  expect(result).toStrictEqual([1, 2])
})

test('Example 2', () => {
  const nums = [1, 2, 4, 8]

  const result = largestDivisibleSubset(nums)

  expect(result).toStrictEqual([1, 2, 4, 8])
})
