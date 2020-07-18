/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
  const nums = []
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
    nums.push(i)
  }

  let s = ''
  let l = k - 1
  for (let i = 0; i < n; i++) {
    fact /= (n - i)
    const index = Math.floor(l / fact)
    const deleted = nums.splice(index, 1)
    s += deleted
    l -= (index * fact)
  }

  return s
}

module.exports = getPermutation
