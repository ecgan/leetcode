const checkValidString = require('./checkValidString')

test('Example 1', () => {
  const input = '()'

  const result = checkValidString(input)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const input = '(*)'

  const result = checkValidString(input)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const input = '(*))'

  const result = checkValidString(input)

  expect(result).toBe(true)
})

test('empty string is valid', () => {
  const input = ''

  const result = checkValidString(input)

  expect(result).toBe(true)
})

test('one (', () => {
  const input = '('

  const result = checkValidString(input)

  expect(result).toBe(false)
})

test('one )', () => {
  const input = ')'

  const result = checkValidString(input)

  expect(result).toBe(false)
})

test('(()', () => {
  const input = '(()'

  const result = checkValidString(input)

  expect(result).toBe(false)
})

test('())', () => {
  const input = '())'

  const result = checkValidString(input)

  expect(result).toBe(false)
})

test('*)', () => {
  const input = '*)'

  const result = checkValidString(input)

  expect(result).toBe(true)
})

test('(*', () => {
  const input = '(*'

  const result = checkValidString(input)

  expect(result).toBe(true)
})
