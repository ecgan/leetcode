const modifyString = require('./modifyString')

test('Example 1', () => {
  const s = '?zs'

  const result = modifyString(s)

  expect(result).toBe('azs')
})

test('Example 2', () => {
  const s = 'ubv?w'

  const result = modifyString(s)

  expect(result).toBe('ubvaw')
})

test('Example 3', () => {
  const s = 'j?qg??b'

  const result = modifyString(s)

  expect(result).toBe('jaqgacb')
})

test('Example 4', () => {
  const s = '??yw?ipkj?'

  const result = modifyString(s)

  expect(result).toBe('abywaipkja')
})
