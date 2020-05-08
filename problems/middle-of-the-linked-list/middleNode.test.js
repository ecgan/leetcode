const { deserialize, serialize } = require('../../utils/singlyLinkedList')
const middleNode = require('./middleNode')

test('Example 1', () => {
  const input = [1, 2, 3, 4, 5]
  const linkedList = deserialize(input)

  const result = middleNode(linkedList)

  const output = serialize(result)
  expect(output).toStrictEqual([3, 4, 5])
})

test('Example 2', () => {
  const input = [1, 2, 3, 4, 5, 6]
  const linkedList = deserialize(input)

  const result = middleNode(linkedList)

  const output = serialize(result)
  expect(output).toStrictEqual([4, 5, 6])
})
