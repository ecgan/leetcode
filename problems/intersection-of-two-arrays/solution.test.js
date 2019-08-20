const intersection = require('./solution')

test('Example 1', () => {
  const nums1 = [1, 2, 2, 1]
  const nums2 = [2, 2]

  const result = intersection(nums1, nums2)

  expect(result).toHaveLength(1)
  expect(result).toContain(2)
})

test('Example 2', () => {
  const nums1 = [4, 9, 5]
  const nums2 = [9, 4, 9, 8, 4]

  const result = intersection(nums1, nums2)

  expect(result).toHaveLength(2)
  expect(result).toContain(9)
  expect(result).toContain(4)
})
