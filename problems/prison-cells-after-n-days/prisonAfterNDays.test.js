const prisonAfterNDays = require('./prisonAfterNDays')

test('Example 1', () => {
  const cells = [0, 1, 0, 1, 1, 0, 0, 1]
  const N = 7

  const result = prisonAfterNDays(cells, N)

  expect(result).toStrictEqual([0, 0, 1, 1, 0, 0, 0, 0])
})

test('Example 2', () => {
  const cells = [1, 0, 0, 1, 0, 0, 1, 0]
  const N = 1000000000

  const result = prisonAfterNDays(cells, N)

  expect(result).toStrictEqual([0, 0, 1, 1, 1, 1, 1, 0])
})
