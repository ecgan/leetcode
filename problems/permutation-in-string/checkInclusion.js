const getMap = (string) => {
  const map = new Array(26).fill(0)

  for (let i = 0; i < string.length; i++) {
    const charIndex = string.charCodeAt(i) - 97
    map[charIndex]++
  }

  return map
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const map = getMap(s1)

  let left = 0
  let right = 0
  let diff = s1.length

  while (right < s2.length) {
    const rightCharIndex = s2.charCodeAt(right) - 97
    if (map[rightCharIndex] >= 1) {
      diff--
    }
    map[rightCharIndex]--
    right++

    if (diff === 0) {
      return true
    }

    if (right - left < s1.length) {
      continue
    }

    const leftCharIndex = s2.charCodeAt(left) - 97
    if (map[leftCharIndex] >= 0) {
      diff++
    }
    map[leftCharIndex]++
    left++
  }

  return false
}

module.exports = checkInclusion
