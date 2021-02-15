const kWeakestRows = require('./kWeakestRows')

test('Example 1', () => {
  const mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ]
  const k = 3

  const result = kWeakestRows(mat, k)

  expect(result).toStrictEqual([2, 0, 3])
})

test('Example 2', () => {
  const mat = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]
  ]
  const k = 2

  const result = kWeakestRows(mat, k)

  expect(result).toStrictEqual([0, 2])
})
