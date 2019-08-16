/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
const btreeGameWinningMove = (root, n, x) => {
  if (n === 1) {
    return false
  }

  const target = Math.floor(n / 2)

  if (root.val === x) {
    const count = dfsSearchCount(root.left, target, 0)

    if (count === target) {
      return false
    }

    return true
  }

  const acc = {
    count: 0,
    nodeX: null
  }

  const resultPreX = dfsSearchCountWithX(root, target, x, acc)

  if (resultPreX.count > target) {
    return true
  } else if (resultPreX.count === target) {
    return false
  }

  const countXLeft = dfsSearchCount(resultPreX.nodeX.left, target, 0)

  if (countXLeft > target) {
    return true
  } else if (countXLeft === target) {
    return false
  }

  const countXRight = n - resultPreX.count - countXLeft - 1
  if (countXRight > target) {
    return true
  }

  return false
}

/**
 * Perform DFS Search for X. Returns as soon as the accumulated count exceeds target. Also returns the TreeNode of x if it is found.
 * @param {*} node
 * @param {*} target
 * @param {*} x
 * @param {*} acc
 */
const dfsSearchCountWithX = (node, target, x, acc) => {
  if (!node) {
    return acc
  }

  if (node.val === x) {
    return {
      count: acc.count,
      nodeX: node
    }
  }

  const count = acc.count + 1
  const nodeX = acc.nodeX
  const result = { count, nodeX }

  if (result.count > target) {
    return result
  }

  const resultLeft = dfsSearchCountWithX(node.left, target, x, result)
  if (resultLeft.count > target) {
    return resultLeft
  }

  const resultLeftRight = dfsSearchCountWithX(node.right, target, x, resultLeft)

  return resultLeftRight
}

/**
 * Perform DFS search on the TreeNode and returns the node count as soon as it exceeds target.
 * @param {TreeNode} node TreeNode to be searched on.
 * @param {number} target Target count.
 * @param {number} acc Accumulated count.
 * @return {number} Count of nodes. Return as soon as it exceeds target.
 */
const dfsSearchCount = (node, target, acc) => {
  if (!node) {
    return acc
  }

  const count = acc + 1
  if (count > target) {
    return count
  }

  const countLeft = dfsSearchCount(node.left, target, count)
  if (countLeft > target) {
    return countLeft
  }

  const countLeftRight = dfsSearchCount(node.right, target, countLeft)

  return countLeftRight
}

module.exports = btreeGameWinningMove
