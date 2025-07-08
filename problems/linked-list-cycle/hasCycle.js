/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let slow = head
  let fast = head && head.next

  while (slow !== null && fast !== null) {
    if (slow === fast) {
      return true
    }

    slow = slow.next
    fast = fast.next && fast.next.next
  }

  return false
}

module.exports = hasCycle
