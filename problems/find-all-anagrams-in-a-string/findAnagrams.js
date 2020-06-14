const getTargetMap = (p) => {
  const targetMap = new Array(26).fill(0)

  for (let i = 0; i < p.length; i++) {
    const charIndex = p.charCodeAt(i) - 97
    targetMap[charIndex]++
  }

  return targetMap
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const targetMap = getTargetMap(p)

  const result = []
  let left = 0
  let right = 0
  let diff = p.length

  while (right < s.length) {
    const rightCharIndex = s.charCodeAt(right) - 97

    if (targetMap[rightCharIndex] >= 1) {
      diff--
    }
    targetMap[rightCharIndex]--
    right++

    if (diff === 0) {
      result.push(left)
    }

    if (right - left < p.length) {
      continue
    }

    const leftCharIndex = s.charCodeAt(left) - 97

    if (targetMap[leftCharIndex] >= 0) {
      diff++
    }
    targetMap[leftCharIndex]++
    left++
  }

  return result
}

module.exports = findAnagrams
