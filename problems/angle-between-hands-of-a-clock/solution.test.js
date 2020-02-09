const angleClock = require('./solution')

test('Example 1', () => {
  const hour = 12
  const minutes = 30

  const result = angleClock(hour, minutes)

  expect(result).toBe(165)
})

test('Example 2', () => {
  const hour = 3
  const minutes = 30

  const result = angleClock(hour, minutes)

  expect(result).toBe(75)
})

test('Example 3', () => {
  const hour = 3
  const minutes = 15

  const result = angleClock(hour, minutes)

  expect(result).toBe(7.5)
})

test('Example 4', () => {
  const hour = 4
  const minutes = 50

  const result = angleClock(hour, minutes)

  expect(result).toBe(155)
})

test('Example 5', () => {
  const hour = 12
  const minutes = 0

  const result = angleClock(hour, minutes)

  expect(result).toBe(0)
})

test('7 hour 45 min', () => {
  const hour = 7
  const minutes = 45

  const result = angleClock(hour, minutes)

  expect(result).toBe(37.5)
})

test('2 hour 50 min', () => {
  const hour = 2
  const minutes = 50

  const result = angleClock(hour, minutes)

  expect(result).toBe(145)
})
