/**
 * Get max diameter of the tree.
 * While traversing the tree, it will keep track of the max diameter.
 * @param {*} node
 */
const getDiameter = (node) => {
  let maxDiameter = 0

  const getHeight = (node) => {
    if (!node) {
      return 0
    }

    const left = getHeight(node.left)
    const right = getHeight(node.right)

    maxDiameter = Math.max(maxDiameter, left + right)

    return Math.max(left, right) + 1
  }

  getHeight(node)

  return maxDiameter
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  const diameter = getDiameter(root)

  return diameter
}

module.exports = diameterOfBinaryTree
