const { deserialize } = require('../../utils/singlyLinkedList')
const hasCycle = require('./hasCycle')

test('Example 1', () => {
  const head = deserialize([3, 2, 0, -4])
  head.next.next.next.next = head.next

  const result = hasCycle(head)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const head = deserialize([1, 2])
  head.next.next = head

  const result = hasCycle(head)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const head = deserialize([1])

  const result = hasCycle(head)

  expect(result).toBe(false)
})
