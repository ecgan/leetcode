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
 * @return {number}
 */
const maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER

  const process = (node) => {
    if (node === null) {
      return 0
    }

    const leftSum = Math.max(0, process(node.left))
    const rightSum = Math.max(0, process(node.right))

    maxSum = Math.max(maxSum, leftSum + rightSum + node.val)

    return Math.max(leftSum, rightSum) + node.val
  }

  process(root)

  return maxSum
}

module.exports = maxPathSum
