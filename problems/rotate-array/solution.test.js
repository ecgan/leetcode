const rotate = require('./solution')

test('Example 1', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  const k = 3

  rotate(arr, k)

  expect(arr).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
})

test('Example 2', () => {
  const arr = [-1, -100, 3, 99]
  const k = 2

  rotate(arr, k)

  expect(arr).toStrictEqual([3, 99, -1, -100])
})
