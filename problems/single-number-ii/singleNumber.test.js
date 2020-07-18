const singleNumber = require('./singleNumber')

test('Example 1', () => {
  const input = [2, 2, 3, 2]

  const result = singleNumber(input)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const input = [0, 1, 0, 1, 0, 1, 99]

  const result = singleNumber(input)

  expect(result).toBe(99)
})
