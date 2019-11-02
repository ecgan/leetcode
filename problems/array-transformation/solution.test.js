const transformArray = require('./solution')

test('Example 1', () => {
  const arr = [6, 2, 3, 4]

  const result = transformArray(arr)

  expect(result).toStrictEqual([6, 3, 3, 4])
})

test('Example 2', () => {
  const arr = [1, 6, 3, 4, 3, 5]

  const result = transformArray(arr)

  expect(result).toStrictEqual([1, 4, 4, 4, 4, 5])
})

test('Array length 1, should return same thing', () => {
  const arr = [5]

  const result = transformArray(arr)

  expect(result).toStrictEqual([5])
})

test('Array length 2, should return same thing', () => {
  const arr = [5, 3]

  const result = transformArray(arr)

  expect(result).toStrictEqual([5, 3])
})

test('not bigger or smaller on both side, should return same thing', () => {
  const arr = [1, 2, 2, 3, 3, 4]

  const result = transformArray(arr)

  expect(result).toStrictEqual([1, 2, 2, 3, 3, 4])
})

test('not bigger or smaller on both side, values higher than first and last element, should return same thing', () => {
  const arr = [1, 55, 55, 33, 33, 10]

  const result = transformArray(arr)

  expect(result).toStrictEqual([1, 55, 55, 33, 33, 10])
})
