const maxNumberOfFamilies = require('./maxNumberOfFamilies')

test('Example 1', () => {
  const n = 3
  const reservedSeats = [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]

  const result = maxNumberOfFamilies(n, reservedSeats)

  expect(result).toBe(4)
})

test('Example 2', () => {
  const n = 2
  const reservedSeats = [[2, 1], [1, 8], [2, 6]]

  const result = maxNumberOfFamilies(n, reservedSeats)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const n = 4
  const reservedSeats = [[4, 3], [1, 4], [4, 6], [1, 7]]

  const result = maxNumberOfFamilies(n, reservedSeats)

  expect(result).toBe(4)
})

test('Left is occupied', () => {
  const n = 1
  const reservedSeats = [[1, 2]]

  const result = maxNumberOfFamilies(n, reservedSeats)

  expect(result).toBe(1)
})

test('Right is occupied', () => {
  const n = 1
  const reservedSeats = [[1, 9]]

  const result = maxNumberOfFamilies(n, reservedSeats)

  expect(result).toBe(1)
})
