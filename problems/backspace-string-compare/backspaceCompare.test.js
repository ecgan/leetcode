const backspaceCompare = require('./backspaceCompare')

test('Example 1', () => {
  const S = 'ab#c'
  const T = 'ad#c'

  const result = backspaceCompare(S, T)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const S = 'ab##'
  const T = 'c#d#'

  const result = backspaceCompare(S, T)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const S = 'a##c'
  const T = '#a#c'

  const result = backspaceCompare(S, T)

  expect(result).toBe(true)
})

test('Example 4', () => {
  const S = 'a#c'
  const T = 'b'

  const result = backspaceCompare(S, T)

  expect(result).toBe(false)
})

test('test', () => {
  const S = '###'
  const T = 'bbb'

  const result = backspaceCompare(S, T)

  expect(result).toBe(false)
})

test('test 2', () => {
  const S = '###bbb'
  const T = 'bbb'

  const result = backspaceCompare(S, T)

  expect(result).toBe(true)
})

test('test 3', () => {
  const S = 'bbbextm'
  const T = 'bbb#extm'

  const result = backspaceCompare(S, T)

  expect(result).toBe(false)
})
