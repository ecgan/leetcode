const getDiff = (s, t) => {
  return (index) => {
    return Math.abs(s[index].charCodeAt(0) - t[index].charCodeAt(0))
  }
}

const equalSubstring = (s, t, maxCost) => {
  const getDiffAt = getDiff(s, t)
  let head = 0
  let tail = 0
  let sum = 0

  for (head = 0; head < s.length; head++) {
    sum += getDiffAt(head)

    if (sum > maxCost) {
      sum -= getDiffAt(tail)
      tail += 1
    }
  }

  return head - tail
}

module.exports = equalSubstring
