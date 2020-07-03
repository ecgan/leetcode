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
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
  const result = []

  if (!root) {
    return result
  }

  const queue = [root]
  let currentLevelNodeCount = queue.length
  let currentLevelNodes = []

  while (queue.length > 0) {
    const node = queue.shift()
    currentLevelNodeCount--

    if (node) {
      currentLevelNodes.push(node.val)

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    if (currentLevelNodeCount === 0) {
      result.unshift([...currentLevelNodes])
      currentLevelNodeCount = queue.length
      currentLevelNodes = []
    }
  }

  return result
}

module.exports = levelOrderBottom
