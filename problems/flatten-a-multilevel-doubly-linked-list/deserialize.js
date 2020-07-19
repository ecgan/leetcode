const Node = require('./Node')

const deserialize = (array) => {
  if (array.length === 0) {
    return null
  }

  const head = new Node(array[0], null, null, null)
  let levelHead = head
  let prev = head

  for (let i = 1; i < array.length; i++) {
    const num = array[i]

    if (num !== null && levelHead !== null) {
      const node = new Node(num, prev, null, null)
      prev.next = node
      prev = node
    } else if (num !== null && levelHead === null) {
      const node = new Node(num, null, null, null)
      prev.child = node
      levelHead = node
      prev = node
    } else if (num === null && levelHead === null) {
      prev = prev.next
    } else {
      prev = levelHead
      levelHead = null
    }
  }

  return head
}

module.exports = deserialize
