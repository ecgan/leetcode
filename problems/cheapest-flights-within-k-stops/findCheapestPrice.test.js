const findCheapestPrice = require('./findCheapestPrice')

test('Example 1', () => {
  const n = 3
  const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
  const src = 0
  const dst = 2
  const k = 1

  const result = findCheapestPrice(n, flights, src, dst, k)

  expect(result).toBe(200)
})

test('Example 2', () => {
  const n = 3
  const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
  const src = 0
  const dst = 2
  const k = 0

  const result = findCheapestPrice(n, flights, src, dst, k)

  expect(result).toBe(500)
})

test('no such route should return -1', () => {
  const n = 4
  const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500], [2, 3, 200]]
  const src = 0
  const dst = 3
  const k = 0

  const result = findCheapestPrice(n, flights, src, dst, k)

  expect(result).toBe(-1)
})

test('intermediate city 4 has no flight out', () => {
  const n = 4
  const flights = [[0, 1, 100], [1, 4, 120], [0, 2, 500], [2, 3, 200]]
  const src = 0
  const dst = 3
  const k = 5

  const result = findCheapestPrice(n, flights, src, dst, k)

  expect(result).toBe(700)
})
