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

const getNumOddsAllowed = (charCount) => {
  let numOdds = 0
  for (const char in charCount) {
    if (charCount[char] % 2 === 1) {
      numOdds += 1
    }
  }

  const numOddsAllowed = Math.floor(numOdds / 2)

  return numOddsAllowed
}

const canMakePali = (numOddsAllowed, k) => {
  if (numOddsAllowed <= k) {
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
    const numOddsAllowed = getNumOddsAllowed(charCount)

    const can = canMakePali(numOddsAllowed, k)

    result.push(can)
  }

  return result
}

module.exports = canMakePaliQueries
