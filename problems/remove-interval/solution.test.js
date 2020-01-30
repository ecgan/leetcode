const removeInterval = require('./solution')

test('Example 1', () => {
  const intervals = [[0, 2], [3, 4], [5, 7]]
  const toBeRemoved = [1, 6]

  const result = removeInterval(intervals, toBeRemoved)

  expect(result).toStrictEqual([[0, 1], [6, 7]])
})

test('Example 2', () => {
  const intervals = [[0, 5]]
  const toBeRemoved = [2, 3]

  const result = removeInterval(intervals, toBeRemoved)

  expect(result).toStrictEqual([[0, 2], [3, 5]])
})

test('toBeRemoved[0] does not replace element', () => {
  const intervals = [[-5, -4], [-3, -2], [1, 2], [3, 5], [8, 9]]
  const toBeRemoved = [-1, 4]

  const result = removeInterval(intervals, toBeRemoved)

  expect(result).toStrictEqual([[-5, -4], [-3, -2], [4, 5], [8, 9]])
})
