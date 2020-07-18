const getHeight = (node) => {
  return (node === null)
    ? -1
    : 1 + getHeight(node.left)
}

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
const countNodes = function (root) {
  const rootHeight = getHeight(root)

  if (rootHeight < 0) {
    return 0
  }

  const rightNodeHeight = getHeight(root.right)
  if (rightNodeHeight === rootHeight - 1) {
    return (1 << rootHeight) + countNodes(root.right)
  }

  return (1 << rootHeight - 1) + countNodes(root.left)
}

module.exports = countNodes
