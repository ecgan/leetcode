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

  const minimum = Math.ceil(n / 2)
  const initialAcc = {
    current: 0,
    foundX: false
  }

  if (root.val === x) {
    const acc = searchCount(root.left, x, minimum, initialAcc)

    if (acc.current === minimum - 1) {
      return false
    }

    return true
  }

  const acc = searchCount(root, x, minimum, initialAcc)

  return (acc.current >= minimum) || (acc.current < minimum - 1)
}

const searchCount = (node, x, minimum, acc) => {
  if (node === null) {
    return acc
  }

  if (node.val === x) {
    acc.foundX = true
    return acc

    // TODO here.
  }

  acc.current += 1

  if (acc.current >= minimum) {
    return acc
  }

  const leftAcc = searchCount(node.left, x, minimum, acc)
  if (leftAcc.current >= minimum) {
    return leftAcc
  }

  const rightAcc = searchCount(node.right, x, minimum, leftAcc)
  if (rightAcc.current >= minimum) {
    return rightAcc
  }

  return rightAcc
}

module.exports = btreeGameWinningMove
