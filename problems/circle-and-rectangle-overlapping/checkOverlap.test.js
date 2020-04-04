/* eslint-disable camelcase */
const checkOverlap = require('./checkOverlap')

test('Example 1', () => {
  const radius = 1
  const x_center = 0
  const y_center = 0
  const x1 = 1
  const y1 = -1
  const x2 = 3
  const y2 = 1

  const result = checkOverlap(radius, x_center, y_center, x1, y1, x2, y2)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const radius = 1
  const x_center = 0
  const y_center = 0
  const x1 = -1
  const y1 = 0
  const x2 = 0
  const y2 = 1

  const result = checkOverlap(radius, x_center, y_center, x1, y1, x2, y2)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const radius = 1
  const x_center = 1
  const y_center = 1
  const x1 = -3
  const y1 = -3
  const x2 = 3
  const y2 = 3

  const result = checkOverlap(radius, x_center, y_center, x1, y1, x2, y2)

  expect(result).toBe(true)
})

test('Example 4', () => {
  const radius = 1
  const x_center = 1
  const y_center = 1
  const x1 = 1
  const y1 = -3
  const x2 = 2
  const y2 = -1

  const result = checkOverlap(radius, x_center, y_center, x1, y1, x2, y2)

  expect(result).toBe(false)
})
