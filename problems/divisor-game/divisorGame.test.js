const divisorGame = require('./divisorGame')

test('Example 1', () => {
  const N = 2

  const result = divisorGame(N)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const N = 3

  const result = divisorGame(N)

  expect(result).toBe(false)
})
