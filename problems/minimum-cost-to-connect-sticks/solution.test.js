const connectSticks = require('./solution')

test('Example 1', () => {
  const sticks = [2, 4, 3]

  const result = connectSticks(sticks)

  expect(result).toBe(14)
})

test('Example 2', () => {
  const sticks = [1, 8, 3, 5]

  const result = connectSticks(sticks)

  expect(result).toBe(30)
})

test('Only 1 stick', () => {
  const sticks = [5]

  const result = connectSticks(sticks)

  expect(result).toBe(0)
})

test('Only 2 sticks', () => {
  const sticks = [5, 4]

  const result = connectSticks(sticks)

  expect(result).toBe(9)
})

test('Contiguous sticks', () => {
  const sticks = [3, 4, 5, 6]

  const result = connectSticks(sticks)

  expect(result).toBe(36)
})

test('Long sticks 2', () => {
  const sticks = [3354, 4316, 3259, 4904, 4598, 474, 3166, 6322, 8080, 9009]

  const result = connectSticks(sticks)

  expect(result).toBe(151646)
})
