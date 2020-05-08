const moveZeroes = require('./moveZeroes')

test('Example 1', () => {
  const nums = [0, 1, 0, 3, 12]

  moveZeroes(nums)

  expect(nums).toStrictEqual([1, 3, 12, 0, 0])
})
