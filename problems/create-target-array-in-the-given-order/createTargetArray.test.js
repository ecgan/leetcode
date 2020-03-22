const createTargetArray = require('./createTargetArray')

test('Example 1', () => {
  const nums = [0, 1, 2, 3, 4]; const index = [0, 1, 2, 2, 1]

  const result = createTargetArray(nums, index)

  expect(result).toStrictEqual([0, 4, 1, 3, 2])
})

test('Example 2', () => {
  const nums = [1, 2, 3, 4, 0]; const index = [0, 1, 2, 3, 0]

  const result = createTargetArray(nums, index)

  expect(result).toStrictEqual([0, 1, 2, 3, 4])
})

test('Example 3', () => {
  const nums = [1]; const index = [0]

  const result = createTargetArray(nums, index)

  expect(result).toStrictEqual([1])
})
