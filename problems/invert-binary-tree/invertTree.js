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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (root === null) {
    return null
  }

  const right = invertTree(root.left)
  const left = invertTree(root.right)

  root.left = left
  root.right = right

  return root
}

module.exports = invertTree
