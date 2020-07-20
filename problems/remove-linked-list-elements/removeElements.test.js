const { deserialize, serialize } = require('../../utils/singlyLinkedList')
const removeElements = require('./removeElements')

test('Example 1', () => {
  const head = deserialize([1, 2, 6, 3, 4, 5, 6])
  const val = 6

  const result = removeElements(head, val)

  expect(serialize(result)).toStrictEqual([1, 2, 3, 4, 5])
})

test('all nodes are val', () => {
  const head = deserialize([6, 6, 6])
  const val = 6

  const result = removeElements(head, val)

  expect(serialize(result)).toStrictEqual([])
})
