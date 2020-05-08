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
 * @param {number[]} arr
 * @return {boolean}
 */
const isValidSequence = function (root, arr) {
  const process = (node, idx) => {
    if (node === null || node.val !== arr[idx]) {
      return false
    }

    if (idx === arr.length - 1) {
      return (
        node.left === null &&
        node.right === null
      )
    }

    return (
      process(node.left, idx + 1) ||
      process(node.right, idx + 1)
    )
  }

  return process(root, 0)
}

module.exports = isValidSequence
