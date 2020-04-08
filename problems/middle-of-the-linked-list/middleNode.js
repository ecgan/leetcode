/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let curIdx = 0
  let midIdx = 0
  let midNode = head

  let node = head.next
  while (node) {
    curIdx++

    const mid = Math.ceil(curIdx / 2)
    if (midIdx !== mid) {
      midNode = midNode.next
      midIdx = mid
    }

    node = node.next
  }

  return midNode
}

module.exports = middleNode
