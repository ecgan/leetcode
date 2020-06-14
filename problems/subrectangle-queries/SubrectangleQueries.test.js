const SubrectangleQueries = require('./SubrectangleQueries')

test('Example 1', () => {
  const subrectangleQueries = new SubrectangleQueries([
    [1, 2, 1],
    [4, 3, 4],
    [3, 2, 1],
    [1, 1, 1]
  ])

  expect(subrectangleQueries.getValue(0, 2)).toBe(1)

  subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5)

  expect(subrectangleQueries.getValue(0, 2)).toBe(5)
  expect(subrectangleQueries.getValue(3, 1)).toBe(5)

  subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10)

  expect(subrectangleQueries.getValue(3, 1)).toBe(10)
  expect(subrectangleQueries.getValue(0, 2)).toBe(5)
})

test('Example 2', () => {
  const subrectangleQueries = new SubrectangleQueries([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ])

  expect(subrectangleQueries.getValue(0, 0)).toBe(1)

  subrectangleQueries.updateSubrectangle(0, 0, 2, 2, 100)

  expect(subrectangleQueries.getValue(0, 0)).toBe(100)
  expect(subrectangleQueries.getValue(2, 2)).toBe(100)

  subrectangleQueries.updateSubrectangle(1, 1, 2, 2, 20)

  expect(subrectangleQueries.getValue(2, 2)).toBe(20)
})
