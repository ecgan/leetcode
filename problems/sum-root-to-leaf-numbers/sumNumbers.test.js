const { deserialize } = require('leettree')
const sumNumbers = require('./sumNumbers')

test('Example 1', () => {
  const root = deserialize([1, 2, 3])

  const result = sumNumbers(root)

  expect(result).toBe(25)
})

test('Example 2', () => {
  const root = deserialize([4, 9, 0, 5, 1])

  const result = sumNumbers(root)

  expect(result).toBe(1026)
})
