const stringShift = require('./stringShift')

test('Example 1', () => {
  const s = 'abc'
  const shift = [[0, 1], [1, 2]]

  const result = stringShift(s, shift)

  expect(result).toBe('cab')
})

test('Example 2', () => {
  const s = 'abcdefg'
  const shift = [[1, 1], [1, 1], [0, 2], [1, 3]]

  const result = stringShift(s, shift)

  expect(result).toBe('efgabcd')
})
