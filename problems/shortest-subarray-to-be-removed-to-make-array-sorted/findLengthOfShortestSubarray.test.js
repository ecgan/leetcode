const findLengthOfShortestSubarray = require('./findLengthOfShortestSubarray')

test('Example 1', () => {
  const arr = [1, 2, 3, 10, 4, 2, 3, 5]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const arr = [5, 4, 3, 2, 1]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(4)
})

test('Example 3', () => {
  const arr = [1, 2, 3]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(0)
})

test('Example 4', () => {
  const arr = [1]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(0)
})

test('135792468, remove 2468', () => {
  const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(4)
})

test('1324, remove 3 or 2', () => {
  const arr = [1, 3, 2, 4]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(1)
})

test('remove tail', () => {
  const arr = [10, 13, 17, 21, 15, 15, 9, 17, 22, 22, 13]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(7)
})

test('remove head', () => {
  const arr = [16, 10, 0, 3, 22, 1, 14, 7, 1, 12, 15]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(8)
})

test('[1, 2, 3, 10, 0, 7, 8, 9] should return 2 (remove 10 and 0)', () => {
  const arr = [1, 2, 3, 10, 0, 7, 8, 9]

  const result = findLengthOfShortestSubarray(arr)

  expect(result).toBe(2)
})
