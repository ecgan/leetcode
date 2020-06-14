/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  if (!head || !head.next) {
    return head
  }

  const evenHead = head.next
  let prev = head
  let cur = head.next
  let isCurEven = true

  while (cur.next !== null) {
    prev.next = cur.next

    prev = cur
    cur = cur.next
    isCurEven = !isCurEven
  }

  if (isCurEven) {
    prev.next = evenHead
  } else {
    prev.next = null
    cur.next = evenHead
  }

  return head
}

module.exports = oddEvenList
