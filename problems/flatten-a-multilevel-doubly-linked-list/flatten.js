/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head) => {
  const stack = []

  const process = (node) => {
    if (!node) {
      return
    }

    if (node.child) {
      if (node.next) {
        stack.push(node.next)
      }

      node.next = node.child
      node.next.prev = node
      node.child = null
    }

    if (node.next === null) {
      if (stack.length > 0) {
        const continueNode = stack.pop()
        node.next = continueNode
        continueNode.prev = node
      }
    }

    process(node.next)
  }

  process(head)

  return head
}

module.exports = flatten
