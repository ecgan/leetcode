const checkLeftRight = (left, right, isEvenLevel) => {
  return isEvenLevel
    ? ((left === undefined || left < right) && right % 2 === 1)
    : ((left === undefined || left > right) && right % 2 === 0)
}

const checkLevelValues = (values, isEvenLevel) => {
  for (let i = 0; i < values.length; i++) {
    const left = values[i - 1]
    const right = values[i]

    if (!checkLeftRight(left, right, isEvenLevel)) {
      return false
    }
  }

  return true
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
 * @return {boolean}
 */
const isEvenOddTree = function (root) {
  const queue = [root]
  let isEvenLevel = true
  let levelValues = []
  let levelNodeCount = queue.length

  while (queue.length >= 1) {
    const node = queue.shift()
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)

    levelValues.push(node.val)
    levelNodeCount--

    if (levelNodeCount === 0) {
      if (!checkLevelValues(levelValues, isEvenLevel)) {
        return false
      }

      levelNodeCount = queue.length
      levelValues = []
      isEvenLevel = !isEvenLevel
    }
  }

  return true
}

module.exports = isEvenOddTree
