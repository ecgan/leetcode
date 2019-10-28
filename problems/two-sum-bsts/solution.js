const twoSumBSTs = (root1, root2, target) => {
  if (root1 === null || root2 === null) {
    return false
  }

  const sum = root1.val + root2.val

  if (sum === target) {
    return true
  } else if (sum < target) {
    return (
      twoSumBSTs(root1, root2.right, target) ||
      twoSumBSTs(root1.right, root2, target)
    )
  } else {
    return (
      twoSumBSTs(root1, root2.left, target) ||
      twoSumBSTs(root1.left, root2, target)
    )
  }
}

module.exports = twoSumBSTs
