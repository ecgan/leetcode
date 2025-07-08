const validateStackSequences = require('./validateStackSequences')

test('Example 1', () => {
  const pushed = [1, 2, 3, 4, 5]
  const popped = [4, 5, 3, 2, 1]

  const result = validateStackSequences(pushed, popped)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const pushed = [1, 2, 3, 4, 5]
  const popped = [4, 3, 5, 1, 2]

  const result = validateStackSequences(pushed, popped)

  expect(result).toBe(false)
})
