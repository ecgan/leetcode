const arraysIntersection = require('./solution')

test('Example 1', () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [1, 2, 5, 7, 9]
  const arr3 = [1, 3, 4, 5, 8]

  const result = arraysIntersection(arr1, arr2, arr3)

  expect(result).toStrictEqual([1, 5])
})
