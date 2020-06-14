const { deserialize, serialize } = require('../../utils/singlyLinkedList')
const oddEvenList = require('./oddEvenList')

test('Example 1', () => {
  const head = deserialize([1, 2, 3, 4, 5])

  const result = oddEvenList(head)

  expect(serialize(result)).toStrictEqual([1, 3, 5, 2, 4])
})

test('Example 2', () => {
  const head = deserialize([2, 1, 3, 5, 6, 4, 7])

  const result = oddEvenList(head)

  expect(serialize(result)).toStrictEqual([2, 3, 6, 7, 1, 5, 4])
})

test('head is null', () => {
  const head = deserialize([])

  const result = oddEvenList(head)

  expect(serialize(result)).toStrictEqual([])
})

test('length is even', () => {
  const head = deserialize([2, 1, 3, 5])

  const result = oddEvenList(head)

  expect(serialize(result)).toStrictEqual([2, 3, 1, 5])
})
