/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = function (list1, a, b, list2) {
  let ptr1 = list1
  let ptr1idx = 0

  while (ptr1idx < a - 1) {
    ptr1 = ptr1.next
    ptr1idx++
  }

  let removedPtr = ptr1.next
  ptr1idx++
  ptr1.next = list2

  let ptr2 = list2
  while (ptr2.next) {
    ptr2 = ptr2.next
  }

  while (ptr1idx < b) {
    removedPtr = removedPtr.next
    ptr1idx++
  }

  ptr2.next = removedPtr.next

  return list1
}

module.exports = mergeInBetween
