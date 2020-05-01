/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  const search = (left, right) => {
    if (right - left <= 1) {
      const isLeftBad = isBadVersion(left)
      return (isLeftBad)
        ? left
        : right
    }

    const mid = Math.floor((left + right) / 2)

    const isMidBad = isBadVersion(mid)
    if (isMidBad) {
      return search(left, mid)
    } else {
      return search(mid + 1, right)
    }
  }

  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    return search(1, n)
  }
}

module.exports = solution
