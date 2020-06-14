const findComplement = require('./findComplement')

test('Example 1', () => {
  const num = 5

  const result = findComplement(num)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const num = 1

  const result = findComplement(num)

  expect(result).toBe(0)
})

test('4', () => {
  const num = 4

  const result = findComplement(num)

  expect(result).toBe(3)
})
