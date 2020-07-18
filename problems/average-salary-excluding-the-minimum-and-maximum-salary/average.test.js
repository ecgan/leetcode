const average = require('./average')

test('Example 1', () => {
  const salary = [4000, 3000, 1000, 2000]

  const result = average(salary)

  expect(result).toBe(2500)
})

test('Example 2', () => {
  const salary = [1000, 2000, 3000]

  const result = average(salary)

  expect(result).toBe(2000)
})

test('Example 3', () => {
  const salary = [6000, 5000, 4000, 3000, 2000, 1000]

  const result = average(salary)

  expect(result).toBe(3500)
})

test('Example 4', () => {
  const salary = [8000, 9000, 2000, 3000, 6000, 1000]

  const result = average(salary)

  expect(result).toBe(4750)
})
