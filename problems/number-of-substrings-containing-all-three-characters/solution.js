const numberOfSubstrings = (s) => {
  let count = 0
  let previousTail = -1
  let tail = 0
  let head
  let windowLock = false

  for (let i = 1; i < s.length; i++) {
    head = i

    if (s[head] === s[tail] && head === tail + 1) {
      tail = head
      continue
    }

    if (s[head] === s[tail] && head - tail >= 2) {
      tail = head - 1
      continue
    }

    if (s[head] !== s[tail] && s[head] !== s[i - 1] && head - tail >= 2) {
      windowLock = true
    }

    if (windowLock) {
      // count to the right.
      let temp = (s.length - head)

      // count to the left until previousTail.
      temp += ((tail - (previousTail + 1)) * temp)

      count += temp

      previousTail = tail
      tail = head - 1
      windowLock = false
    }
  }

  return count
}

module.exports = numberOfSubstrings
