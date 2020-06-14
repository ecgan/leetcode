const checkStraightLine = require('./checkStraightLine')

test('Example 1', () => {
  const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]

  const result = checkStraightLine(coordinates)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const coordinates = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]

  const result = checkStraightLine(coordinates)

  expect(result).toBe(false)
})

test('horizontal straight line', () => {
  const coordinates = [[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]]

  const result = checkStraightLine(coordinates)

  expect(result).toBe(true)
})

test('vertical straight line', () => {
  const coordinates = [[1, 3], [1, 4], [1, 5]]

  const result = checkStraightLine(coordinates)

  expect(result).toBe(true)
})
