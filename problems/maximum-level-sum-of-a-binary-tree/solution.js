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
const maxLevelSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER
  let maxSumLevel = 0

  const nodeQueue = [root]
  let currentLevel = 1
  let currentLevelNodeCount = 1
  let currentLevelSum = 0

  while (nodeQueue.length > 0) {
    const node = nodeQueue.shift()

    currentLevelSum += node.val

    if (node.left) {
      nodeQueue.push(node.left)
    }

    if (node.right) {
      nodeQueue.push(node.right)
    }

    currentLevelNodeCount -= 1

    if (currentLevelNodeCount === 0) {
      if (currentLevelSum > maxSum) {
        maxSum = currentLevelSum
        maxSumLevel = currentLevel
      }

      currentLevel += 1
      currentLevelSum = 0
      currentLevelNodeCount = nodeQueue.length
    }
  }

  return maxSumLevel
}

module.exports = maxLevelSum
