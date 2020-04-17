const rob = require('./rob')

test('Example 1', () => {
  const nums = [1, 2, 3, 1]

  const result = rob(nums)

  expect(result).toBe(4)
})

test('Example 2', () => {
  const nums = [2, 7, 9, 3, 1]

  const result = rob(nums)

  expect(result).toBe(12)
})

test('[3, 100, 3, 100, 3] should return 200', () => {
  const nums = [3, 100, 3, 100, 3]

  const result = rob(nums)

  expect(result).toBe(200)
})

test('[3, 100, 3, 3, 100] should return 200', () => {
  const nums = [3, 100, 3, 3, 100]

  const result = rob(nums)

  expect(result).toBe(200)
})

test('[2, 1, 1, 2] should return 4', () => {
  const nums = [2, 1, 1, 2]

  const result = rob(nums)

  expect(result).toBe(4)
})

test('[] should return 0', () => {
  const nums = []

  const result = rob(nums)

  expect(result).toBe(0)
})

test('[10] should return 10', () => {
  const nums = [10]

  const result = rob(nums)

  expect(result).toBe(10)
})
