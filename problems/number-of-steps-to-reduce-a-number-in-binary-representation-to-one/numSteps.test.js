const numSteps = require('./numSteps')

test('Example 1', () => {
  const s = '1101'

  const result = numSteps(s)

  expect(result).toBe(6)
})

test('Example 2', () => {
  const s = '10'

  const result = numSteps(s)

  expect(result).toBe(1)
})

test('Example 3', () => {
  const s = '1'

  const result = numSteps(s)

  expect(result).toBe(0)
})

test('long string', () => {
  const s = '1111011110000011100000110001011011110010111001010111110001'

  const result = numSteps(s)

  expect(result).toBe(85)
})

test('11001 should return 8', () => {
  const s = '11001'

  const result = numSteps(s)

  expect(result).toBe(8)
})
