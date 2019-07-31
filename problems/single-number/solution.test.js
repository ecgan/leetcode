const singleNumber = require('./solution')

test('Sample 1', () => {
  const input = [2, 2, 1]

  const result = singleNumber(input)

  expect(result).toBe(1)
})

test('Sample 2', () => {
  const input = [4, 1, 2, 1, 2]

  const result = singleNumber(input)

  expect(result).toBe(4)
})
