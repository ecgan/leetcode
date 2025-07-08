const serialize = (head) => {
  const array = []
  const nodeIndexMap = new Map()

  let node = head
  let index = 0
  while (node !== null) {
    nodeIndexMap.set(node, index)

    node = node.next
    index++
  }

  node = head
  while (node !== null) {
    const randomNode = node.random
    const randomIndex = nodeIndexMap.has(randomNode)
      ? nodeIndexMap.get(randomNode)
      : null

    array.push([node.val, randomIndex])
    node = node.next
  }

  return array
}

module.exports = serialize
