const minimumSwap = require('./solution')

test('Example 1', () => {
  const s1 = 'xx'
  const s2 = 'yy'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const s1 = 'xy'
  const s2 = 'yx'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(2)
})

test('Example 3', () => {
  const s1 = 'xx'
  const s2 = 'xy'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(-1)
})

test('Example 4', () => {
  const s1 = 'xxyyxyxyxx'
  const s2 = 'xyyxyxxxyx'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(4)
})

test('same string', () => {
  const s1 = 'xy'
  const s2 = 'xy'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(0)
})

test('y0 and y4, should return 2', () => {
  const s1 = 'xxxx'
  const s2 = 'yyyy'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(2)
})

test('y1 and y3, should return 3', () => {
  const s1 = 'xxxy'
  const s2 = 'yyyx'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(3)
})

test('y2 and y2, should return 2', () => {
  const s1 = 'xxyy'
  const s2 = 'yyxx'

  const result = minimumSwap(s1, s2)

  expect(result).toBe(2)
})
