/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const stack = []
  let node = root
  let i = 0

  while (true) {
    while (node !== null) {
      stack.push(node)
      node = node.left
    }

    node = stack.pop()
    i++

    if (i === k) {
      return node.val
    }

    node = node.right
  }
}

module.exports = kthSmallest
