// Definition for a Node.
// function Node (val, next, random) {
//   this.val = val
//   this.next = next
//   this.random = random
// };

const getNextNode = (node) => {
  return (node === null)
    ? null
    : node.next
}

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
  // eslint-disable-next-line no-undef
  const N = Node

  let ori = head

  while (ori !== null) {
    const copy = new N(ori.val)
    copy.next = ori.next
    ori.next = copy

    ori = ori.next.next
  }

  ori = head
  while (ori !== null) {
    const copy = ori.next
    copy.random = getNextNode(ori.random)

    ori = ori.next.next
  }

  ori = head
  const copyHead = getNextNode(ori)
  while (ori !== null) {
    const copy = ori.next
    ori.next = copy.next
    copy.next = getNextNode(copy.next)

    ori = ori.next
  }

  return copyHead
}

module.exports = copyRandomList
