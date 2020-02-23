const validateBinaryTreeNodes = (n, leftChild, rightChild) => {
  const nextChildQueue = [0]
  const leftSet = new Set(leftChild)
  const rightSet = new Set(rightChild)

  for (let i = 0; i < n; i++) {
    nextChildQueue.shift()

    const left = leftChild[i]
    const right = rightChild[i]

    if (left >= 0) {
      if (left <= i) {
        return false
      }

      if (rightSet.has(left)) {
        return false
      }

      nextChildQueue.push(left)
    }

    if (right >= 0) {
      if (right <= i) {
        return false
      }

      if (leftSet.has(right)) {
        return false
      }

      nextChildQueue.push(right)
    }

    if (i < n - 1 && nextChildQueue.length === 0) {
      return false
    }
  }

  return true
}

module.exports = validateBinaryTreeNodes
