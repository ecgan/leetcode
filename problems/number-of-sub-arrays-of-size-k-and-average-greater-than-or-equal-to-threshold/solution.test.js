const numOfSubarrays = require('./solution')

test('Example 1', () => {
  const arr = [2, 2, 2, 2, 5, 5, 5, 8]
  const k = 3
  const threshold = 4

  const result = numOfSubarrays(arr, k, threshold)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const arr = [1, 1, 1, 1, 1]
  const k = 1
  const threshold = 0

  const result = numOfSubarrays(arr, k, threshold)

  expect(result).toBe(5)
})

test('Example 3', () => {
  const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3]
  const k = 3
  const threshold = 5

  const result = numOfSubarrays(arr, k, threshold)

  expect(result).toBe(6)
})

test('Example 4', () => {
  const arr = [7, 7, 7, 7, 7, 7, 7]
  const k = 7
  const threshold = 7

  const result = numOfSubarrays(arr, k, threshold)

  expect(result).toBe(1)
})

test('Example 5', () => {
  const arr = [4, 4, 4, 4]
  const k = 4
  const threshold = 1

  const result = numOfSubarrays(arr, k, threshold)

  expect(result).toBe(1)
})
