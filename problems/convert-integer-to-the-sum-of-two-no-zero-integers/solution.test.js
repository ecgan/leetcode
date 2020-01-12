const getNoZeroIntegers = require('./solution')

test('Example 1', () => {
  const n = 2

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([1, 1])
})

test('Example 2', () => {
  const n = 11

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([2, 9])
})

test('Example 3', () => {
  const n = 10000

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([1111, 8889])
})

test('Example 4', () => {
  const n = 69

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([1, 68])
})

test('Example 5', () => {
  const n = 1010

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([121, 889])
})

test('2911', () => {
  const n = 2911

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([122, 2789])
})

test('214', () => {
  const n = 214

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([21, 193])
})

test('2218', () => {
  const n = 2218

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([221, 1997])
})

test('6208', () => {
  const n = 6208

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([211, 5997])
})

test('222', () => {
  const n = 222

  const result = getNoZeroIntegers(n)

  expect(result).toStrictEqual([11, 211])
})
