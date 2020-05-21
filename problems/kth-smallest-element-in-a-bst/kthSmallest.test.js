const { deserialize } = require('leettree')
const kthSmallest = require('./kthSmallest')

test('Example 1', () => {
  const root = deserialize([3, 1, 4, null, 2])
  const k = 1

  const result = kthSmallest(root, k)

  expect(result).toBe(1)
})

test('Example 2', () => {
  const root = deserialize([5, 3, 6, 2, 4, null, null, 1])
  const k = 3

  const result = kthSmallest(root, k)

  expect(result).toBe(3)
})
