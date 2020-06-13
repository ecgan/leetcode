const frequencySort = require('./sortColors')

test('Example 1', () => {
  const nums = [2, 0, 2, 1, 1, 0]

  frequencySort(nums)

  expect(nums).toStrictEqual([0, 0, 1, 1, 2, 2])
})
