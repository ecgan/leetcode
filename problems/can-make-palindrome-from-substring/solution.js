/**
 * Get an array of prefix sum where each value is an object
 * that has the character in s as its key,
 * and the count of the character as its value.
 * @param {*} s
 */
const getPrefixSum = (s) => {
  const prefixSum = []
  const cur = {}

  for (const char of s) {
    if (cur[char] === undefined) {
      cur[char] = 1
    } else {
      cur[char] += 1
    }

    prefixSum.push({ ...cur })
  }

  return prefixSum
}

/**
 * Get an object representing the character count difference
 * from two prefix sum values.
 * @param {*} sumLeft The first, smaller prefix sum value.
 * @param {*} sumRight The second, bigger prefix sum value.
 */
const getCharCount = (sumLeft, sumRight) => {
  const result = {}

  for (const char in sumRight) {
    if (sumLeft[char] === undefined) {
      result[char] = sumRight[char]
    } else {
      result[char] = sumRight[char] - sumLeft[char]
    }
  }

  return result
}

/**
 * Get the number of odds needed to make the substring a palindrome.
 * @param {*} charCount
 */
const getNumOddsNeeded = (charCount) => {
  let numOdds = 0
  for (const char in charCount) {
    if (charCount[char] % 2 === 1) {
      numOdds += 1
    }
  }

  const numOddsNeeded = Math.floor(numOdds / 2)

  return numOddsNeeded
}

const canMakePali = (numOddsNeeded, k) => {
  if (numOddsNeeded <= k) {
    return true
  }

  return false
}

const canMakePaliQueries = (s, queries) => {
  const prefixSum = getPrefixSum(s)

  const result = []
  for (const query of queries) {
    const [left, right, k] = query

    if (k >= 13) {
      result.push(true)
      continue
    }

    const sumLeft = (left === 0)
      ? {}
      : prefixSum[left - 1]
    const sumRight = prefixSum[right]

    const charCount = getCharCount(sumLeft, sumRight)
    const numOddsNeeded = getNumOddsNeeded(charCount)

    const can = canMakePali(numOddsNeeded, k)

    result.push(can)
  }

  return result
}

module.exports = canMakePaliQueries
