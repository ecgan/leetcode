const sortByBits = require('./solution')

test('Example 1', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  const result = sortByBits(arr)

  expect(result).toStrictEqual([0, 1, 2, 4, 8, 3, 5, 6, 7])
})

test('Example 2', () => {
  const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]

  const result = sortByBits(arr)

  expect(result).toStrictEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024])
})

test('Example 3', () => {
  const arr = [10000, 10000]

  const result = sortByBits(arr)

  expect(result).toStrictEqual([10000, 10000])
})

test('Example 4', () => {
  const arr = [2, 3, 5, 7, 11, 13, 17, 19]

  const result = sortByBits(arr)

  expect(result).toStrictEqual([2, 3, 5, 17, 7, 11, 13, 19])
})

test('Example 5', () => {
  const arr = [10, 100, 1000, 10000]

  const result = sortByBits(arr)

  expect(result).toStrictEqual([10, 100, 10000, 1000])
})
