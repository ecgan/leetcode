/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2

  let dist2 = 1
  let dist1 = 2
  let cur = 0
  for (let i = 3; i <= n; i++) {
    cur = dist1 + dist2

    dist2 = dist1
    dist1 = cur
  }

  return cur
}

module.exports = climbStairs
