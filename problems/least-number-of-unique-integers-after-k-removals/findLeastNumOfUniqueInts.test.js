const findLeastNumOfUniqueInts = require('./findLeastNumOfUniqueInts')

test('Example 1', () => {
  const arr = [5, 5, 4]
  const k = 1

  const result = findLeastNumOfUniqueInts(arr, k)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const arr = [4, 3, 1, 1, 3, 3, 2]
  const k = 3

  const result = findLeastNumOfUniqueInts(arr, k)

  expect(result).toBe(2)
})
