/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
  const count = new Array(N).fill(0)

  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i]
    count[a - 1]--
    count[b - 1]++
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] === N - 1) {
      return (i + 1)
    }
  }

  return -1
}

module.exports = findJudge
