const { deserialize, serialize } = require('../../utils/singlyLinkedList')
const mergeInBetween = require('./mergeInBetween')

test('Example 1', () => {
  const list1 = deserialize([0, 1, 2, 3, 4, 5])
  const a = 3
  const b = 4
  const list2 = deserialize([1000000, 1000001, 1000002])

  const result = mergeInBetween(list1, a, b, list2)

  expect(serialize(result)).toStrictEqual([0, 1, 2, 1000000, 1000001, 1000002, 5])
})

test('Example 2', () => {
  const list1 = deserialize([0, 1, 2, 3, 4, 5, 6])
  const a = 2
  const b = 5
  const list2 = deserialize([1000000, 1000001, 1000002, 1000003, 1000004])

  const result = mergeInBetween(list1, a, b, list2)

  expect(serialize(result)).toStrictEqual([0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6])
})
