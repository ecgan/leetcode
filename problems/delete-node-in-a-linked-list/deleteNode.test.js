const { deserialize, serialize } = require('../../utils/singlyLinkedList')
const deleteNode = require('./deleteNode')

const getNode = (list, num) => {
  let node = list
  while (node.val !== num) {
    node = node.next
  }

  return node
}

test('Example 1', () => {
  const head = deserialize([4, 5, 1, 9])
  const node = getNode(head, 5)

  deleteNode(node)

  expect(serialize(head)).toStrictEqual([4, 1, 9])
})

test('Example 2', () => {
  const head = deserialize([4, 5, 1, 9])
  const node = getNode(head, 1)

  deleteNode(node)

  expect(serialize(head)).toStrictEqual([4, 5, 9])
})
