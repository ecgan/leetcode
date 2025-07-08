const simplifyPath = require('./simplifyPath')

test('Example 1', () => {
  const path = '/home/'

  const result = simplifyPath(path)

  expect(result).toBe('/home')
})

test('Example 2', () => {
  const path = '/../'

  const result = simplifyPath(path)

  expect(result).toBe('/')
})

test('Example 3', () => {
  const path = '/home//foo/'

  const result = simplifyPath(path)

  expect(result).toBe('/home/foo')
})

test('Example 4', () => {
  const path = '/a/./b/../../c/'

  const result = simplifyPath(path)

  expect(result).toBe('/c')
})
