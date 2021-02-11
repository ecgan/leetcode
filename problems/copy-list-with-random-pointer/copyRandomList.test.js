const Node = require('./Node')
const deserialize = require('./deserialize')
const serialize = require('./serialize')
const copyRandomList = require('./copyRandomList')

global.Node = Node

test('Example 1', () => {
  const head = deserialize([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]])

  const result = copyRandomList(head)

  expect(serialize(result)).toStrictEqual([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]])
})

test('Example 2', () => {
  const head = deserialize([[1, 1], [2, 1]])

  const result = copyRandomList(head)

  expect(serialize(result)).toStrictEqual([[1, 1], [2, 1]])
})

test('Example 3', () => {
  const head = deserialize([[3, null], [3, 0], [3, null]])

  const result = copyRandomList(head)

  expect(serialize(result)).toStrictEqual([[3, null], [3, 0], [3, null]])
})

test('Example 4', () => {
  const head = deserialize([])

  const result = copyRandomList(head)

  expect(serialize(result)).toStrictEqual([])
})
