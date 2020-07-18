/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  const N = citations.length
  let h = 0
  let lo = 0
  let hi = citations.length - 1

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2)
    const num = citations[mid]
    const paperCount = N - mid

    if (num >= paperCount) {
      h = Math.max(paperCount, h)
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return h
}

module.exports = hIndex
