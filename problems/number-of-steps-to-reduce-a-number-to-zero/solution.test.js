const numberOfSteps = require('./solution')

test('Example 1', () => {
  const num = 14

  const result = numberOfSteps(num)

  expect(result).toBe(6)
})

test('Example 2', () => {
  const num = 8

  const result = numberOfSteps(num)

  expect(result).toBe(4)
})

test('Example 3', () => {
  const num = 123

  const result = numberOfSteps(num)

  expect(result).toBe(12)
})
