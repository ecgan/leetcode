const numTriplets = require('./numTriplets')

test('Example 1', () => {
  const nums1 = [7, 4]
  const nums2 = [5, 2, 8, 9]

  const result = numTriplets(nums1, nums2)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const nums1 = [1, 1]
  const nums2 = [1, 1, 1]

  const result = numTriplets(nums1, nums2)

  expect(result).toBe(9)
})

test('Example 3', () => {
  const nums1 = [7, 7, 8, 3]
  const nums2 = [1, 2, 9, 7]

  const result = numTriplets(nums1, nums2)

  expect(result).toBe(2)
})

test('Example 4', () => {
  const nums1 = [4, 7, 9, 11, 23]
  const nums2 = [3, 5, 1024, 12, 18]

  const result = numTriplets(nums1, nums2)

  expect(result).toBe(0)
})
