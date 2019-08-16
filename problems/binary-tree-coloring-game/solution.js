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
  const acc = {
    count: 0,
    nodeX: null
  }

  if (root.val === x) {
    dfsSearchCountNodeX(root.left, target, x, acc)

    if (acc.count === target) {
      return false
    }

    return true
  }

  dfsSearchCountNodeX(root, target, x, acc)

  if (acc.count > target) {
    return true
  } else if (acc.count === target) {
    return false
  }

  const accLeft = { count: 0 }
  dfsSearchCountNodeX(acc.nodeX.left, target, x, accLeft)

  if (accLeft.count > target) {
    return true
  } else if (accLeft.count === target) {
    return false
  }

  const countXRight = n - acc.count - accLeft.count - 1
  if (countXRight > target) {
    return true
  }

  return false
}

/**
 * Perform DFS Search for X. Returns as soon as the accumulated count exceeds target. Also set acc.nodeX if x is found.
 * @param {*} node
 * @param {*} target
 * @param {*} x
 * @param {*} acc
 */
const dfsSearchCountNodeX = (node, target, x, acc) => {
  if (!node) {
    return
  }

  if (node.val === x) {
    acc.nodeX = node
    return
  }

  acc.count += 1

  if (acc.count > target) {
    return
  }

  dfsSearchCountNodeX(node.left, target, x, acc)
  if (acc.count > target) {
    return
  }

  dfsSearchCountNodeX(node.right, target, x, acc)
}

module.exports = btreeGameWinningMove
