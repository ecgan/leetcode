/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next
  }

  let currNode = head
  while (currNode) {
    let nextNode = currNode.next

    while (nextNode && nextNode.val === val) {
      nextNode = nextNode.next
    }

    currNode.next = nextNode
    currNode = currNode.next
  }

  return head
}

module.exports = removeElements
