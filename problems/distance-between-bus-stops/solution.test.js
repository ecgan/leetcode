const distanceBetweenBusStops = require('./solution')

test('Example 1', () => {
  const distance = [1, 2, 3, 4]
  const start = 0
  const destination = 1

  const result = distanceBetweenBusStops(distance, start, destination)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const distance = [1, 2, 3, 4]
  const start = 0
  const destination = 2

  const result = distanceBetweenBusStops(distance, start, destination)

  expect(result).toBe(3)
})

test('Example 3', () => {
  const distance = [1, 2, 3, 4]
  const start = 0
  const destination = 3

  const result = distanceBetweenBusStops(distance, start, destination)

  expect(result).toBe(4)
})

test('start is bigger than destination', () => {
  const distance = [7, 10, 1, 12, 11, 14, 5, 0]
  const start = 7
  const destination = 2

  const result = distanceBetweenBusStops(distance, start, destination)

  expect(result).toBe(17)
})

test('destination is 0', () => {
  const distance = [6, 47, 48, 31, 10, 27, 46, 33, 52, 33, 38, 25, 32, 45, 36, 3, 0, 33, 22, 53, 8, 13, 18, 1, 44, 41, 14, 5, 38, 25, 48]
  const start = 22
  const destination = 0

  const result = distanceBetweenBusStops(distance, start, destination)

  expect(result).toBe(234)
})
