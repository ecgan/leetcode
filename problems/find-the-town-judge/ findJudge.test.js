const findJudge = require('./ findJudge')

test('Example 1', () => {
  const N = 2
  const trust = [[1, 2]]

  const result = findJudge(N, trust)

  expect(result).toBe(2)
})

test('Example 2', () => {
  const N = 3
  const trust = [[1, 3], [2, 3]]

  const result = findJudge(N, trust)

  expect(result).toBe(3)
})

test('Example 3', () => {
  const N = 3
  const trust = [[1, 3], [2, 3], [3, 1]]

  const result = findJudge(N, trust)

  expect(result).toBe(-1)
})

test('Example 4', () => {
  const N = 3
  const trust = [[1, 2], [2, 3]]

  const result = findJudge(N, trust)

  expect(result).toBe(-1)
})

test('Example 5', () => {
  const N = 4
  const trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]

  const result = findJudge(N, trust)

  expect(result).toBe(3)
})
