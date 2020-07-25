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
const zigzagLevelOrder = function (root) {
  const result = []
  const nodeStack = [root]
  let currentLevelValues = []
  let nextLevelNodeStack = []
  let isEvenLevel = true

  while (nodeStack.length > 0) {
    const node = nodeStack.pop()
    if (node) {
      currentLevelValues.push(node.val)
      nextLevelNodeStack.push(isEvenLevel ? node.left : node.right)
      nextLevelNodeStack.push(isEvenLevel ? node.right : node.left)
    }

    if (nodeStack.length === 0) {
      if (currentLevelValues.length > 0) {
        result.push(currentLevelValues)
      }

      nodeStack.push(...nextLevelNodeStack)

      currentLevelValues = []
      nextLevelNodeStack = []
      isEvenLevel = !isEvenLevel
    }
  }

  return result
}

module.exports = zigzagLevelOrder
