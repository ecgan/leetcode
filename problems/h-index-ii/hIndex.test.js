const hIndex = require('./hIndex')

test('Example 1', () => {
  const citations = [0, 1, 3, 5, 6]

  const result = hIndex(citations)

  expect(result).toBe(3)
})

test('4/5 papers with a least 4 citations', () => {
  const citations = [0, 4, 5, 6, 7]

  const result = hIndex(citations)

  expect(result).toBe(4)
})

test('1 paper with 1 citation', () => {
  const citations = [0, 0, 1]

  const result = hIndex(citations)

  expect(result).toBe(1)
})

test('3 papers with 1 citation', () => {
  const citations = [1, 1, 1]

  const result = hIndex(citations)

  expect(result).toBe(1)
})

test('1 paper with 0 citation', () => {
  const citations = [0]

  const result = hIndex(citations)

  expect(result).toBe(0)
})

test('1 paper with 100 citation', () => {
  const citations = [100]

  const result = hIndex(citations)

  expect(result).toBe(1)
})
