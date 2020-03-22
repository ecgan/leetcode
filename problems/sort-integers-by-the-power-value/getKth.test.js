const getKth = require('./getKth')

test('Example 1', () => {
  const lo = 12; const hi = 15; const k = 2

  const result = getKth(lo, hi, k)

  expect(result).toBe(13)
})

test('Example 2', () => {
  const lo = 1; const hi = 1; const k = 1

  const result = getKth(lo, hi, k)

  expect(result).toBe(1)
})

test('Example 3', () => {
  const lo = 7; const hi = 11; const k = 4

  const result = getKth(lo, hi, k)

  expect(result).toBe(7)
})

test('Example 4', () => {
  const lo = 10; const hi = 20; const k = 5

  const result = getKth(lo, hi, k)

  expect(result).toBe(13)
})

test('Example 5', () => {
  const lo = 1; const hi = 1000; const k = 777

  const result = getKth(lo, hi, k)

  expect(result).toBe(570)
})
