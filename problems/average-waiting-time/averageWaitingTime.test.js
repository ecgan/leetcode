const averageWaitingTime = require('./averageWaitingTime')

test('Example 1', () => {
  const customers = [[1, 2], [2, 5], [4, 3]]

  const result = averageWaitingTime(customers)

  expect(result).toBe(5)
})

test('Example 2', () => {
  const customers = [[5, 2], [5, 4], [10, 3], [20, 1]]

  const result = averageWaitingTime(customers)

  expect(result).toBe(3.25)
})
