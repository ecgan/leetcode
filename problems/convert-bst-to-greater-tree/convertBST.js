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
const convertBST = (root) => {
  let sum = 0

  const convertNode = (node) => {
    if (node) {
      convertNode(node.right)
      sum += node.val
      node.val = sum
      convertNode(node.left)
    }
  }

  convertNode(root)

  return root
}

module.exports = convertBST
