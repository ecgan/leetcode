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
