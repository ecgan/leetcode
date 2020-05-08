const getPreviousLCSFn = (dp) => (row, j) => {
  if (row < 0) return 0
  if (j < 0) return 0

  return dp[row][j]
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  if (text1 < text2) {
    return longestCommonSubsequence(text2, text1)
  }

  const dp = []
  const getPreviousLCS = getPreviousLCSFn(dp)

  for (let i = 0; i < text1.length; i++) {
    dp.push([])
    const dpLastRow = dp.length - 1
    const char1 = text1[i]

    for (let j = 0; j < text2.length; j++) {
      const char2 = text2[j]

      dp[dpLastRow][j] = (char1 === char2)
        ? getPreviousLCS(dpLastRow - 1, j - 1) + 1
        : Math.max(
          getPreviousLCS(dpLastRow - 1, j),
          getPreviousLCS(dpLastRow, j - 1)
        )
    }

    if (dp.length === 2) {
      dp.shift()
    }
  }

  return dp[0][dp[0].length - 1]
}

module.exports = longestCommonSubsequence
