const findTheDistanceValue = require('./findTheDistanceValue')

test('Example 1', () => {
  const arr1 = [4, 5, 8]
  const arr2 = [10, 9, 1, 8]
  const d = 2

  const result = findTheDistanceValue(arr1, arr2, d)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const arr1 = [1, 4, 2, 3]
  const arr2 = [-4, -3, 6, 10, 20, 30]
  const d = 3

  const result = findTheDistanceValue(arr1, arr2, d)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const arr1 = [2, 1, 100, 3]
  const arr2 = [-5, -2, 10, -3, 7]
  const d = 6

  const result = findTheDistanceValue(arr1, arr2, d)

  expect(result).toBe(1)
})

test('[4], [10], 5 should return 1', () => {
  const arr1 = [4]
  const arr2 = [10]
  const d = 5

  const result = findTheDistanceValue(arr1, arr2, d)

  expect(result).toBe(1)
})

test('[6], [10], 5 should return 0', () => {
  const arr1 = [6]
  const arr2 = [10]
  const d = 5

  const result = findTheDistanceValue(arr1, arr2, d)

  expect(result).toBe(0)
})
