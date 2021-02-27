/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = (S) => {
  let result = 0
  let balance = 0

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      balance++
    } else {
      balance--

      if (S[i - 1] === '(') {
        result += 1 << balance
      }
    }
  }

  return result
}

module.exports = scoreOfParentheses
