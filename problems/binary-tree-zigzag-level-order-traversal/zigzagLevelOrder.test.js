const { deserialize } = require('leettree')
const zigzagLevelOrder = require('./zigzagLevelOrder')

test('Example 1', () => {
  const root = deserialize([3, 9, 20, null, null, 15, 7])

  const result = zigzagLevelOrder(root)

  expect(result).toStrictEqual([
    [3],
    [20, 9],
    [15, 7]
  ])
})

test('empty root', () => {
  const root = deserialize([])

  const result = zigzagLevelOrder(root)

  expect(result).toStrictEqual([])
})

test('with null child nodes in the middle', () => {
  const root = deserialize([1, 2, 3, 4, null, null, 5])

  const result = zigzagLevelOrder(root)

  expect(result).toStrictEqual([
    [1],
    [3, 2],
    [4, 5]
  ])
})

test('with null child node at the end of process', () => {
  const root = deserialize([1, null, 2])

  const result = zigzagLevelOrder(root)

  expect(result).toStrictEqual([
    [1],
    [2]
  ])
})
