const shiftGrid = require('./solution')

test('Example 1', () => {
  const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const k = 1

  const result = shiftGrid(grid, k)

  expect(result).toStrictEqual([[9, 1, 2], [3, 4, 5], [6, 7, 8]])
})

test('Example 2', () => {
  const grid = [[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]]
  const k = 4

  const result = shiftGrid(grid, k)

  expect(result).toStrictEqual([[12, 0, 21, 13], [3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10]])
})

test('Example 3', () => {
  const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const k = 9

  const result = shiftGrid(grid, k)

  expect(result).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
})

test('2x3 grid, shift 1', () => {
  const grid = [[1, 2], [3, 4], [5, 6]]
  const k = 1

  const result = shiftGrid(grid, k)

  expect(result).toStrictEqual([[6, 1], [2, 3], [4, 5]])
})

test('2x3 grid, shift 2', () => {
  const grid = [[1, 2], [3, 4], [5, 6]]
  const k = 2

  const result = shiftGrid(grid, k)

  expect(result).toStrictEqual([[5, 6], [1, 2], [3, 4]])
})
