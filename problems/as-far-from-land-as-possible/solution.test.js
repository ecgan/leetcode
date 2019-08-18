const maxDistance = require('./solution')

test('Example 1', () => {
  const input = [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

  const result = maxDistance(input)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const input = [[1, 0, 0], [0, 0, 0], [0, 0, 0]]

  const result = maxDistance(input)

  expect(result).toBe(4)
})

test('All water', () => {
  const input = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

  const result = maxDistance(input)

  expect(result).toBe(-1)
})

test('All land', () => {
  const input = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]

  const result = maxDistance(input)

  expect(result).toBe(-1)
})

test('One land in the middle', () => {
  const input = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]

  const result = maxDistance(input)

  expect(result).toBe(4)
})
