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
  const map = {}

  const nodeQueue = [root]
  let currentLevel = 1
  let currentLevelNodeCount = 1
  let currentLevelSum = 0

  while (nodeQueue.length > 0) {
    const node = nodeQueue.shift()

    if (node !== null) {
      currentLevelSum += node.val

      if (node.left) {
        nodeQueue.push(node.left)
      }

      if (node.right) {
        nodeQueue.push(node.right)
      }
    }

    currentLevelNodeCount -= 1

    if (currentLevelNodeCount === 0) {
      map[currentLevel] = currentLevelSum

      currentLevel += 1
      currentLevelSum = 0
      currentLevelNodeCount = nodeQueue.length
    }
  }

  let level = 0
  let maxSum = Number.MIN_SAFE_INTEGER
  for (const [key, value] of Object.entries(map)) {
    if (value > maxSum) {
      maxSum = value
      level = parseInt(key)
    }
  }

  return level
}

module.exports = maxLevelSum
