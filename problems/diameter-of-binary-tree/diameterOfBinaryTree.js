/**
 * Gets a count object consists of treeCount and longBranchCount.
 * @param {*} node Tree node.
 */
const getCount = (node) => {
  if (!node) {
    return {
      treeCount: 0,
      longBranchCount: 0
    }
  }

  const left = getCount(node.left)
  const right = getCount(node.right)

  const treeCount = Math.max(
    1 + left.longBranchCount + right.longBranchCount,
    left.treeCount,
    right.treeCount
  )

  const longBranchCount = Math.max(
    1 + left.longBranchCount,
    1 + right.longBranchCount
  )

  return {
    treeCount,
    longBranchCount
  }
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
  const count = getCount(root)

  return Math.max(0, count.treeCount - 1)
}

module.exports = diameterOfBinaryTree
