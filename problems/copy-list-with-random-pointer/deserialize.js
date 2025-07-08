const Node = require('./Node')

const deserialize = (array) => {
  const indexNodeMap = new Map()
  let head = null

  for (let i = array.length - 1; i >= 0; i--) {
    const [val] = array[i]

    const cur = new Node()
    cur.val = val
    cur.next = head

    head = cur
    indexNodeMap.set(i, head)
  }

  let node = head
  let i = 0
  while (node !== null) {
    const [, randomIndex] = array[i]

    const randomNode = randomIndex === null
      ? null
      : indexNodeMap.get(randomIndex)

    node.random = randomNode

    node = node.next
    i++
  }

  return head
}

module.exports = deserialize
