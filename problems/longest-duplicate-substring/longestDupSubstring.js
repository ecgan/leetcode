const mod = 2 ** 32

const getHash = (chars) => {
  let hash = 0
  for (let i = 0; i < chars.length; i++) {
    hash = (hash * 26 + chars[i]) % mod
  }

  return hash
}

const mathPowMod = (num, pow, mod) => {
  let result = 1
  for (let i = 1; i <= pow; i++) {
    result = (result * num) % mod
  }

  return result
}

/**
 * @param {string} S
 * @return {string}
 */
const longestDupSubstring = function (S) {
  const chars = S.split('').map(s => {
    return s.charCodeAt(0) - 'a'.charCodeAt(0)
  })

  const test = (length) => {
    // compute the hash of string S[0:idx]
    let hash = getHash(chars.slice(0, length))

    // Already seen hashes of strings of length L (len)
    const seen = new Set([hash])

    const p = mathPowMod(26, length, mod)
    for (let i = length; i < chars.length; i++) {
      // Compute rolling hash in O(1) time
      // hash = (hash * 26 + chars[i] - chars[i - length] * p); // without mod
      hash = ((hash * 26 + chars[i] - chars[i - length] * p % mod + mod) % mod)

      if (seen.has(hash)) {
        return i - length + 1
      }

      seen.add(hash)
    }
  }

  let res = 0
  let lo = 0
  let hi = chars.length
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2)
    const pos = test(mid)
    if (pos) {
      lo = mid
      res = pos
    } else {
      hi = mid - 1
    }
  }

  return S.substring(res, res + lo)
}

module.exports = longestDupSubstring
